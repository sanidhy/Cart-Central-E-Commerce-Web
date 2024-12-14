import React, { useEffect, useState } from 'react';
import './homeDetails.css';
import LongCardItem from '../../../longcard.json';
import axios from 'axios';

export const HomeDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Upload the file and then fetch the data
    const uploadAndFetchData = async () => {
      try {
        // Upload the file
        // const file = new File(
        //   [JSON.stringify(LongCardItem)], // Using the imported JSON file content
        //   'src/longcard.json',
        //   { type: 'application/json' } // Correct MIME type
        // );

        // const formData = new FormData();
        // formData.append('file', file);
        // // console.log(file)
        // console.log("Uploading file...");
        // const uploadResponse = await axios.post('http://localhost:9000/upload-json', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });

        // console.log('File uploaded successfully:', uploadResponse.data);

        // Fetch the data after the upload is successful
        console.log("Fetching data...");
        const fetchResponse = await axios.get('http://localhost:9000/fetch-json');
        setData(fetchResponse.data);
        console.log("Data fetched successfully:", fetchResponse.data);
      } catch (error) {
        console.error('Error in upload or fetch:', error);
        setError('Failed to upload or fetch data');
      }
    };

    uploadAndFetchData();
  }, []);

  return (
    <div className='homeDetails'>
      <div className='homeDetailLongCard'>
        <div className='homeDetailLongCardTitle'>Today's Deals</div>
        <div className='homeDetailsLongCardItems'>
          <div className='scrollDiv'>
            {data.length > 0 ? (
              data.map((item, index) => (
                <div className='homeDetailLongCardItem' key={index}>
                  <img
                    className='homeDetailsLongCardItemImg'
                    src={item.imgs}
                    alt={item.itemTitle}
                  />
                  <div className='homeDetailLongCardItemImgDetail'>
                    <div className='homeDetailLongCardItemImgTopDetail'>
                      <div className='homeDetailPercentageoff'>Up to 20% off</div>
                      <div className='limitedTimeDealhomeDetail'>Limited Time Deal</div>
                    </div>
                    <div className='bottomHomeDetail'>{item.itemTitle}</div>
                  </div>
                </div>
              ))
            ) : error ? (
              <p className='error'>{error}</p>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
