import React, { useEffect, useState } from 'react';
import '../css/view-item.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { indianNumberFormat } from '../utils/UtilFunctions';

function ViewItem() {
    const baseUrl = 'http://localhost:3501/uploads/';

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3501/product/mobiles', { params: { id: id } });
                setItemData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className='view-item-container'>
            <div className='view-item-image'>
                <img src={baseUrl + itemData?.imageUrl} alt={itemData?.name} />
                <div>
                    <Link to="/cart"><button className='btn btn-success view-item-btn'> <AddShoppingCartOutlinedIcon /> Add to cart</button></Link>
                    <Link to="/checkout"><button className='btn btn-primary view-item-btn'> <FlashOnOutlinedIcon />Buy now</button></Link>
                </div>
            </div>
            <div className='view-item-desc'>
                <h5>{itemData?.name}</h5>
                <div className='view-item-dp'>
                <h3>₹{indianNumberFormat(itemData?.price)}</h3>
                <h6 className='gray-color'>
                    Highlights
                </h6>
                <ul className='item-features'>
                    <li>{itemData?.ram}GB RAM</li>
                    <li>{itemData?.storage >= 1024
                        ? itemData?.storage / 1024
                        : itemData?.storage
                    }GB ROM
                    </li>
                </ul>
                <h6 className='gray-color'>
                    Description
                </h6>
                <article>
                    {itemData?.description}
                </article>
            </div>
            </div>
        </div>
    )
}

export default ViewItem;