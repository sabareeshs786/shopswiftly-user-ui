import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import { Box, Tab } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../context/ItemContextProvider';
import axios from 'axios';
import ItemDisplay from './ItemDisplay';

function ItemListContent() {
    const sortBy = {
        "1": "low-to-high",
        "2": "high-to-low",
        "3": "newest-first"
    }
    const { tabNumber, handleTabChange, brand, queryParams, range, pathname, navigate } = useContext(ItemContext);
    const [itemDataArr, setItemDataArr] = useState(null);
    const MyBox = styled(Box)({
        width: "100%",
        padding: 0,
        height: 'auto'
    });
    const MyTab = styled(Tab)({
        textTransform: "none",
        opacity: 1,
        color: 'black',
        fontSize: '1rem'
    });
    const DisabledTab = styled(Tab)({
        '&.Mui-disabled': {
            opacity: 1,
            color: 'black',
        },
        textTransform: 'none',
        fontSize: '0.9rem',
    });

    const MyTabPanel = styled(TabPanel)({
        padding: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            const queryParam = { preview: false, "brand": brand?.join(','), "min-price": range[0], "max-price": range[1], "sort": sortBy[tabNumber] };
            const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParam });
            console.log(response.data);
            for (const key in queryParam) {
                if (queryParam.hasOwnProperty(key)) {
                    const value = queryParam[key];
                    queryParams.set(key, value);
                }
            }
            setItemDataArr(response.data);
            if (queryParams)
                navigate(pathname + '?' + queryParams.toString());
            console.log("Search: ", queryParams.toString());
        }
        fetchData();
    }, [brand, tabNumber, range]);

    return (
        <MyBox sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabNumber}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="Sort By Tab">
                        <DisabledTab label="Sort by" disabled />
                        <MyTab label="Price -- Low to High" value="1" />
                        <MyTab label="Price -- High to Low" value="2" />
                        <MyTab label="Newest first" value="3" />
                    </TabList>
                </Box>
                <MyTabPanel value="1">
                    {
                        itemDataArr &&
                        itemDataArr?.map((itemData, ind) => <ItemDisplay itemData={itemData} key={ind} />)
                    }
                </MyTabPanel>
                <TabPanel value="2">

                </TabPanel>
                <TabPanel value="3">

                </TabPanel>
            </TabContext>
        </MyBox>
    )
}

export default ItemListContent;