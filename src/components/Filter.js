import React, { useContext, useEffect } from 'react'
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import FilterHeader from './FilterHeader'
import ItemContext from '../context/ItemContextProvider';
import axios from 'axios';

function Filter() {
    const { brand, sort, queryParams } = useContext(ItemContext);

    useEffect(() => {
        const fetchData = async () => {
            const queryParam = { preview: false, brand: queryParams.get('brand') };
            const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParams });

        }
        fetchData();
    }, [brand, sort]);


    return (
        <div className='cust-filter float-left'>
            <FilterHeader />
            <PriceFilter />
            <BrandFilter />
        </div>
    )
}

export default Filter