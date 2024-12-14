import React, { useEffect, useState } from 'react';
import './homeDetails.css'
import LongCardItem from '../../../longcard.json';
// import axios from 'axios';

export const HomeDetails = () => {
    const [error, setError] = useState(null);
  return (
    <div className='homeDetails'>
    <div className='homeDetailLongCard'>
      <div className='homeDetailLongCardTitle'>Today's Deals</div>
      <div className='homeDetailsLongCardItems'>
        <div className='scrollDiv'>
          {LongCardItem.data.length > 0 ? (
            LongCardItem.data.map((item, index) => {
              return (
                <div className='homeDetailLongCardItem'>
                  <img className='homeDetailsLongCardItemImg' src={item.imgs} />
                  <div className='homeDetailLongCardItemImgDetail'>
                    <div className='homeDetailLongCardItemImgTopDetail'>
                      <div className='homeDetailPercentageoff'>Up to 20% off</div>
                      <div className='limitedTimeDealhomeDetail'>Limited Time Deal</div>
                    </div>
                    <div className='bottomHomeDetail'>{item.itemTitle}</div>
                  </div>
                </div>
              );
            })
          ) : (
            !error && <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  </div>
    
  );
};