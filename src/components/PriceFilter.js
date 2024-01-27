import { Slider } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ItemContext from '../context/ItemContextProvider'
import axios from 'axios';

function PriceFilter() {
  const { range, handleChanges, minMaxValues, formatValueLabel, getAriaValueText, brand } = useContext(ItemContext);
  const { setMinMaxValues, setRange, queryParams } = useContext(ItemContext);

  useEffect(() => {
    const getAndSetMinMax = async () => {
      try {
        const queryParam = { preview: false, "brand": brand?.join(',') };
        const response = await axios.get('http://localhost:3503/products/minmax/mobiles', { params: queryParam });
        const { minValue, maxValue } = response.data;
        setMinMaxValues({ min: minValue, max: maxValue });
        setRange([minValue, maxValue]);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetMinMax();
  }, [brand]);
  
  return (
    <div className='price-filter'>
      <div>
        <label>Price</label>
      </div>
      <div className='price-slider'>
        <Slider
          value={range}
          onChange={handleChanges}
          valueLabelDisplay="auto"
          min={minMaxValues.min}
          max={minMaxValues.max}
          valueLabelFormat={formatValueLabel}
          getAriaValueText={getAriaValueText}
        />
      </div>
      <div className='price-range'>
        <div className='price-start-range'>
          ₹{range[0]}
        </div>
        <div className='price-to-text'>
          to
        </div>
        <div className='price-end-range'>
          ₹{range[1]}
        </div></div>
    </div>
  )
}

export default PriceFilter;