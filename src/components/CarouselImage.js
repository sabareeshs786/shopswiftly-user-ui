import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarouselImageDisplay = ({ imageId }) => {
    const [imageData, setImageData] = useState(null);
    
    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/api/images/${imageId}`, {
              responseType: 'arraybuffer',
            });
    
            const arrayBufferView = new Uint8Array(response.data);
            const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });
            const imageDataUrl = URL.createObjectURL(blob);
            setImageData(imageDataUrl);
          } catch (error) {
            console.error(error);
          }
        };
        fetchImage();
      }, [imageId]);

    return <img src={imageData} alt="Image" className="d-block w-100"/>;
};

export default CarouselImageDisplay;
