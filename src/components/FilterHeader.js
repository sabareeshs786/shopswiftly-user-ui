import React from 'react'
import { Link } from 'react-router-dom'

function FilterHeader() {
    return (
        <>
            <div className='cust-filter-header'>
                <div className='cust-filter-text'>Filters</div>
                <Link to="#">Clear all</Link>
            </div>
            <div className='cust-filter-content'>
                <div>
                    <label>Categories</label>
                </div>
                <div className='categories'>
                    Mobiles
                </div>
            </div>
        </>
    )
}

export default FilterHeader