import React from 'react';
import "./index.css";

const DataSetSection = () => {
  return (
    <div className='dataset-section'>
      <div className='dataset-header'>
        Unmatched Dataset Size
      </div>
      <div className='dataset-description'>
        Our database is massive, ensuring you have access to a wide variety of characters for any application.
      </div>
      <div className='dataset-box-container'>
        <div className='dataset-box'>
          <div className='dataset-box-header'>
            500TB+
          </div>
          <div className='dataset-box-description'>
            Conversational Training Data
          </div>
        </div>
        <div className='dataset-box'>
          <div className='dataset-box-header'>
            6 Million
          </div>
          <div className='dataset-box-description'>
          Individual characters
          </div>
        </div>
        <div className='dataset-box'>
          <div className='dataset-box-header'>
            10k
          </div>
          <div className='dataset-box-description'>
            New characters per day
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSetSection;