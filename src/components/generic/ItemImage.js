import React from 'react';
import { Link } from "react-router-dom";

function ItemImage({filename, altText, caption, price}) {
  const baseUrl = 'http://localhost:3501/uploads/';
  return (
    <Link to="/mmm" className='item-image-container'>
        <img src={baseUrl + filename} alt={altText} />
        <div className='item-image-caption'>
            {caption}<br />
            <span className='price'>&#8377; {price}</span>
        </div>
    </Link>
  )
}

export default ItemImage;
