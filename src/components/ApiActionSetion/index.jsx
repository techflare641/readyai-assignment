import React from 'react';
import "./index.css";

const ApiActionSetion = () => {
  return (
    <div className='apiaction-container'>
      <div className='apiaction-textsection'>
        <div className='apiaction-textsection-header'>
          See the API in Action
        </div>
        <div className='apiaction-textsection-description'>
          Explore our interactive demo to experience the potential of the Personas API.
        </div>
      </div>
      <img className='apiaction-picture' src="/images/frame-apiaction.png" />
    </div>
  )
}

export default ApiActionSetion;
