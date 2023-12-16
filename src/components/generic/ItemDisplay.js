import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../css/item-display.css'

function ItemDisplay() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [brand, setBrand] = useState(queryParams.get('brand')?.split(','));
    const [sort, setSort] = useState(queryParams.get('sort'));
    const [data, setData] = useState(null);
    useEffect(() =>{
        const fetchData = async () =>{
            const queryParam = { preview: false, brand: queryParams.get('brand')};
            const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParams });
            
        }

        fetchData();
    }, [brand, sort]);

    return (
        <div className="main-container-item">
            <div className='cust-filter float-left'>
                <div className='cust-filter-header'>
                    <div className='cust-filter-text'>Filters</div>
                    <Link to="#">Clear all</Link>
                </div>
            </div>
            <div className='mobile-list float-left'>
                mobiles
            </div>
        </div>
    )
}

export default ItemDisplay;