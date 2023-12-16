import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/main.css';
import '../css/cateitems.css';
import ItemImage from './generic/ItemImage';
import { Link } from 'react-router-dom';

function MobileContainer() {
  const [dataArr, setDataArr] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const brands = ["apple", "samsung", "oppo"];
    const fetchData = async (brand) => {
      try {
        console.log(brand)
        const queryParams = { preview: true, brand: brand }
        const response = await axios.get('http://localhost:3501/items/mobiles', { params: queryParams });
        setDataArr(prevDataArr => [...prevDataArr, response.data]);
        console.log(dataArr);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    brands.forEach((brand) => {
      fetchData(brand);
    })
  },[]);

  return (
    <div className="main-container">
      {dataArr && dataArr.length > 0 &&
        dataArr.map((e, i) => 
          (
            <div key={i} className="item-flex-container">
              <div className="item-flex-header">
                <h2>{e && e.length > 0 ? e[0].brand.charAt(0).toUpperCase() + e[0].brand.slice(1) : ''} smartphones</h2>
                <Link to={"/mobiles?brand=" + e[0].brand + "&sort=price"}><button className='btn btn-primary'>View all</button></Link>
              </div>
              <div className='item-flex-items'>
                {e && e.length > 0 && e.map((imgData, index) =>
                  <ItemImage key={index} filename={imgData.imageUrl} altText={imgData.name} caption={imgData.name} />
                )}
              </div>
            </div>
          )
        )
      }
    </div>
  )
}

export default MobileContainer;