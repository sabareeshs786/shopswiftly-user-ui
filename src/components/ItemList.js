import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import React, { useContext } from 'react';
import ItemContext from '../context/ItemContextProvider';

function ItemList() {
    const { tabNumber, handleTabChange } = useContext(ItemContext);
    return (
        <>
            <div className='item-list float-left'>
                <div>
                    <h4>Mobiles</h4>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabNumber}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Sort by" disabled />
                                <Tab label="Item One" value="1" />
                                <Tab label="Item Two" value="2" />
                                <Tab label="Item Three" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    )
}

export default ItemList