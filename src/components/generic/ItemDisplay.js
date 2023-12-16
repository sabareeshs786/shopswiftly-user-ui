import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ItemDisplay() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [brand, setBrand] = useState(queryParams.get('brands').split(','));
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
        <div className="main-container">
            
        </div>
    )
}

export default ItemDisplay;