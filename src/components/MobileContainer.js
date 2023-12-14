import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/main.css';
import '../css/cateitems.css';

function MobileContainer() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = {preview: true, brand: "oppo"}
        const response = await axios.get('http://localhost:3501/items/mobiles', {params: queryParams});
        console.log(response);
        setData(response.data[0].name);
      } catch (error) {
        console.log(error);
      } finally {

      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
        <div className="flex-container">
          <div className="flex-header">
            <h2>Apple smartphones</h2>
            <button className='btn btn-primary'>View all</button>
          </div>
          <div className='flex-items'>
            <div> Name: {data}</div>
          </div>
        </div>
    </div>
  )
}

export default MobileContainer;