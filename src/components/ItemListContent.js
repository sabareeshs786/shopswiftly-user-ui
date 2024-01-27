import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import { Box, Tab } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ItemContext from '../context/ItemContextProvider';
import axios from 'axios';
import ItemDisplay from './ItemDisplay';
import ItemListPagination from './ItemListPagination';
import LoadingAnimation from './LoadingAnimation';
import { removeEmptyParams } from '../utils/UtilFunctions';


function ItemListContent() {
    const sortBy = {
        "1": "lth",
        "2": "htl",
        "3": "nf"
    };
    const { tabNumber, handleTabChange, brand, queryParams, range, pathname, navigate } = useContext(ItemContext);
    const [itemDataArr, setItemDataArr] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [loading, setLoading] = useState(false);
    const handlePageChange = (event, value) => {
        setPage(value);
    };

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
            try {
                console.log('Brand and price filter');
                setLoading(true);
                const filterqueryparams = removeEmptyParams({
                    "brand": brand?.join(','),
                    "min-price": range[0],
                    "max-price": range[1]
                });
                const filterResponse = await axios.get('http://localhost:3503/products/get-pagination-data/mobiles', { params: filterqueryparams });
                const countOfDocs = filterResponse.data.countOfDocs;
                setPageCount(Math.ceil(countOfDocs / pageSize));
                setPage(1);

                const custQueryParam = {
                    preview: false,
                    "brand": brand?.join(','),
                    "min-price": range[0],
                    "max-price": range[1],
                    "sort": sortBy[tabNumber],
                    "page": page,
                    "pageSize": pageSize
                };
                const response = await axios.get('http://localhost:3503/products/mobiles', { params: custQueryParam });

                for (const key in custQueryParam) {
                    if (custQueryParam.hasOwnProperty(key)) {
                        const value = custQueryParam[key];
                        queryParams.set(key, value);
                    }
                }

                setItemDataArr(response.data);
                if (queryParams)
                    navigate(pathname + '?' + queryParams.toString());
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [range]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('tabnumber');
                setLoading(true);
                const filterqueryparams = removeEmptyParams({
                    "brand": brand?.join(','),
                    "min-price": range[0],
                    "max-price": range[1]
                });
                const filterResponse = await axios.get('http://localhost:3503/products/get-pagination-data/mobiles', { params: filterqueryparams });
                const countOfDocs = filterResponse.data.countOfDocs;

                const queryparams = removeEmptyParams({
                    preview: false,
                    "brand": brand?.join(','),
                    "min-price": range[0],
                    "max-price": range[1],
                    "sort": sortBy[tabNumber],
                    "page": 1,
                    "pageSize": pageSize
                });
                
                const listResponse = await axios.get('http://localhost:3503/products/mobiles', { params: queryparams });

                for (const key in queryparams) {
                    if (queryparams.hasOwnProperty(key)) {
                        const value = queryparams[key];
                        queryParams.set(key, value);
                    }
                }
                
                setPageCount(Math.ceil(countOfDocs / pageSize));

                setItemDataArr(listResponse.data);
                setPage(1);
                if (queryParams)
                    navigate(pathname + '?' + queryParams.toString());
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [tabNumber]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log('Page loading')
                const custQueryParam = {
                    preview: false,
                    "brand": brand?.join(','),
                    "min-price": range[0],
                    "max-price": range[1],
                    "sort": sortBy[tabNumber],
                    "page": page,
                    "pageSize": pageSize
                };
                const response = await axios.get('http://localhost:3503/products/mobiles', { params: custQueryParam });

                for (const key in custQueryParam) {
                    if (custQueryParam.hasOwnProperty(key)) {
                        const value = custQueryParam[key];
                        queryParams.set(key, value);
                    }
                }
                setItemDataArr(response.data);
                if (queryParams)
                    navigate(pathname + '?' + queryParams.toString());
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [page]);

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
                        loading ? <LoadingAnimation /> :
                            itemDataArr &&
                            itemDataArr?.map((itemData, ind) => <ItemDisplay itemData={itemData} key={ind} />)
                    }
                    {
                        !loading ? <ItemListPagination
                            page={page}
                            pageCount={pageCount}
                            handlePageChange={handlePageChange}
                        /> : ''
                    }

                </MyTabPanel>
                <MyTabPanel value="2">
                    {
                        loading ? <LoadingAnimation /> :
                            itemDataArr &&
                            itemDataArr?.map((itemData, ind) => <ItemDisplay itemData={itemData} key={ind} />)
                    }
                    {
                        !loading ? <ItemListPagination
                            page={page}
                            pageCount={pageCount}
                            handlePageChange={handlePageChange}
                        /> : ''
                    }
                </MyTabPanel>
                <MyTabPanel value="3">
                    {
                        loading ? <LoadingAnimation /> :
                            itemDataArr &&
                            itemDataArr?.map((itemData, ind) => <ItemDisplay itemData={itemData} key={ind} />)
                    }
                    {
                        !loading ? <ItemListPagination
                            page={page}
                            pageCount={pageCount}
                            handlePageChange={handlePageChange}
                        /> : ''
                    }
                </MyTabPanel>
            </TabContext>
        </MyBox>
    )
}

export default ItemListContent;