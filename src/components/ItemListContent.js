import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import { Box, Tab } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ItemContext from '../context/ItemContextProvider';
import axios from 'axios';

function ItemListContent() {
    const sortBy = {
        "1": "low-to-high",
        "2": "high-to-low",
        "3": "newest-first"
    }
    const { tabNumber, handleTabChange, brand, sort, queryParams } = useContext(ItemContext);
    const MyBox = styled(Box)({
        width: "100%",
        padding: 0
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

    useEffect(() => {
        const fetchData = async () => {
            const queryParam = { preview: false, brand: queryParams.get('brand') };
            const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParams });

        }
        fetchData();
    }, [brand, sort]);

    return (
        <MyBox sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabNumber}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                        <DisabledTab label="Sort by" disabled />
                        <MyTab label="Price -- Low to High" value="1" />
                        <MyTab label="Price -- High to Low" value="2" />
                        <MyTab label="Newest first" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">

                </TabPanel>
                <TabPanel value="2">

                </TabPanel>
                <TabPanel value="3">

                </TabPanel>
            </TabContext>
        </MyBox>
    )
}

export default ItemListContent