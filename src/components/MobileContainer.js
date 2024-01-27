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
        const queryParams = { preview: true, brand: brand };
        const response = await axios.get('http://localhost:3503/products/mobiles', { params: queryParams });
        console.log(response);
        setDataArr(prevDataArr => [...prevDataArr, response.data]);
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
            e && e.length > 0 &&
            <div key={i} className="item-flex-container">
              <div className="item-flex-header">
                <h2>{ e[0]?.brand?.charAt(0).toUpperCase() + e[0]?.brand?.slice(1) } smartphones</h2>
                <Link to={"/mobiles?brand=" + e[0].brand + "&sort=lth"}><button className='btn btn-primary'>View all</button></Link>
              </div>
              <div className='item-flex-items'>
                { e.map((r, index) =>
                  <ItemImage key={index} filename={r.imageFilenames[r.imageFilenames.length - 1]} altText={r.pname} caption={r.pname} price={r.sp}/>
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