import React from 'react'
import { Link } from 'react-router-dom';
import { indianNumberFormat } from '../utils/UtilFunctions';

function ItemDisplay({ itemData, ind }) {
    const baseUrl = 'http://localhost:3501/images/';

    return (
        <Link key={ind} to={"view-item?id=" + itemData?._id} target="_blank" className='item-display-main'>
            <div className='item-image'>
                <img src={baseUrl + itemData?.imageUrl} alt={itemData?.name} />
            </div>
            <div className='item-display-desc'>
                <h5>{itemData?.name}</h5>
                <ul className='item-features'>
                    <li>{itemData?.ram}GB RAM</li>
                    <li>{itemData?.storage >= 1024
                        ? itemData?.storage / 1024
                        : itemData?.storage
                    }GB ROM
                    </li>
                </ul>
            </div>
            <div className='display-price'>
                <h3>₹{indianNumberFormat(itemData?.price)}</h3>
            </div>
        </Link>
    );
}

export default ItemDisplay;