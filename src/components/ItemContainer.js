import React from 'react';
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