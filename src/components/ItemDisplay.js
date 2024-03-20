import React from 'react'
import { Link } from 'react-router-dom';
import { indianNumberFormat } from '../utils/UtilFunctions';

function ItemDisplay({ itemData, ind }) {
    const baseUrl = 'http://localhost:3502/images/';

    return (
        <Link key={ind} to={"view?id=" + itemData?.skuid} target="_blank" className='item-display-main'>
            <div className='item-image'>
                <img src={baseUrl + itemData?.imageFilenames[itemData.imageFilenames?.length - 1]} alt={itemData?.pname} />
            </div>
            <div className='item-display-desc'>
                <h5>{itemData?.pname}</h5>
                <ul className='item-features'>
                    {
                        itemData.highlights && itemData.highlights.length > 0 &&
                        itemData?.highlights?.map((d, i) => 
                            i<4 && (<li key={i}>{d}</li>)
                        )
                    }
                </ul>
            </div>
            <div className='display-price'>
                <h3>₹{indianNumberFormat(itemData?.sp)}</h3>
            </div>
        </Link>
    );
}

export default ItemDisplay;