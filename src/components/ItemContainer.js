import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../css/item-display.css';
import Filter from './Filter';
import ItemList from './ItemList';

function ItemContainer() {

  return (
    <div className="main-container-item">
      <Filter />
      <ItemList />
      </div>
  )
}

export default ItemContainer;