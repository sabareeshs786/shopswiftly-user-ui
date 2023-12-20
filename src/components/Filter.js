import React, { useContext, useEffect } from 'react'
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import FilterHeader from './FilterHeader'
import ItemContext from '../context/ItemContextProvider';
import axios from 'axios';

function Filter() {


    return (
        <div className='cust-filter float-left'>
            <FilterHeader />
            <PriceFilter />
            <BrandFilter />
        </div>
    )
}

export default Filter