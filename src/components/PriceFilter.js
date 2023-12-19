import { Slider } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ItemContext from '../context/ItemContextProvider'
import axios from 'axios';

function PriceFilter() {
    const {range, handleChanges, minMaxValues, formatValueLabel, getAriaValueText} = useContext(ItemContext);
    const { setMinMaxValues, setRange, queryParams } = useContext(ItemContext);

  useEffect(() => {
    const getAndSetMinMax = async () => {
      try {
        const queryParam = { preview: false, brand: queryParams.get('brand') };
        const response = await axios.get('http://localhost:3501/items/minmax/mobiles', { params: queryParam });
        const { minValue, maxValue } = response.data;
        setMinMaxValues({ min: minValue, max: maxValue });
        setRange([minValue, maxValue]);
      } catch (error) {
        console.log(error)
      }
    };
    getAndSetMinMax();
  }, []);
    return (
        <div className='price-filter'>
            <div>
                <label>Price</label>
            </div>
            <div>
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
            <center>₹{range[0]} to ₹{range[1]}</center>
        </div>
    )
}

export default PriceFilter