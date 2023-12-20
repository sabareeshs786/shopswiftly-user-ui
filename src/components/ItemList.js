import React from 'react';
import ItemListHeader from './ItemListHeader';
import ItemListContent from './ItemListContent';

function ItemList() {
    return (
        <>
            <div className='item-list float-left'>
                <ItemListHeader />
                <ItemListContent />
            </div>
        </>
    )
}

export default ItemList