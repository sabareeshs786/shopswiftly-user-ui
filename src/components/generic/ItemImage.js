import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function ItemImage({filename, altText, caption}) {
  const baseUrl = 'http://localhost:3501/uploads/'
  return (
    <Link to="/mmm" className='item-image-container'>
        <img src={baseUrl + filename} alt={altText} />
        <div className='item-image-caption'>
            {caption}<br />
            <span className='price'>&#8377; 45000</span>
        </div>
    </Link>
  )
}

export default ItemImage;
