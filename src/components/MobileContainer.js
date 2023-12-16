import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/main.css';
import '../css/cateitems.css';
import ItemImage from './generic/ItemImage';

function MobileContainer() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = {preview: true, brand: "oppo"}
        const response = await axios.get('http://localhost:3501/items/mobiles', {params: queryParams});
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
        <div className="item-flex-container">
          <div className="item-flex-header">
            <h2>{data && data.length > 0 ? data[0].brand.charAt(0).toUpperCase() + data[0].brand.slice(1) : ''} smartphones</h2>
            <button className='btn btn-primary'>View all</button>
          </div>
          <div className='item-flex-items'>
          {data && data.length > 0 && data.map( (imgData) =>
            <ItemImage key={imgData.imageUrl} filename={imgData.imageUrl} altText={imgData.name} caption={imgData.name} />
          )}
          </div>
        </div>
        <div className="item-flex-container">
          <div className="item-flex-header">
            <h2>{data && data.length > 0 ? data[0].brand.charAt(0).toUpperCase() + data[0].brand.slice(1) : ''} smartphones</h2>
            <button className='btn btn-primary'>View all</button>
          </div>
          <div className='item-flex-items'>
          {data && data.length > 0 && data.map( (imgData) =>
            <ItemImage key={imgData.imageUrl} filename={imgData.imageUrl} altText={imgData.name} caption={imgData.name} />
          )}
          </div>
        </div>
        <div className="item-flex-container">
          <div className="item-flex-header">
            <h2>{data && data.length > 0 ? data[0].brand.charAt(0).toUpperCase() + data[0].brand.slice(1) : ''} smartphones</h2>
            <button className='btn btn-primary'>View all</button>
          </div>
          <div className='item-flex-items'>
          {data && data.length > 0 && data.map( (imgData) =>
            <ItemImage key={imgData.imageUrl} filename={imgData.imageUrl} altText={imgData.name} caption={imgData.name} />
          )}
          </div>
        </div>
    </div>
  )
}

export default MobileContainer;