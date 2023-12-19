import React from 'react';
import { ItemContextProvider } from '../../context/ItemContextProvider';
import ItemContainer from '../ItemContainer';

function ItemDisplay() {

    return (
        <ItemContextProvider>
            <ItemContainer />
        </ItemContextProvider>
    )
}

export default ItemDisplay;
