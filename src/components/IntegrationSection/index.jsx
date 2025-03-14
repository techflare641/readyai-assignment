import React from 'react';
import "./index.css";

const IntegrationSection = () => {
  return (
    <div className='integration-container'>
      <img src="/images/code-snippet.png" className='integration-image' />
      <div className='integration-text-section'>
        <div className='integration-text-header'>
          Integration with the Personas API
        </div>
        <div className='integration-text-description'>
          Integrating the Personas API into your application is designed to be seamless and straightforward. Here’s how you can get started:
        </div>
        <div className='integration-text-subheader'>
          Step 1: Access the Documentation 
        </div>
        <div className='integration-text-description'>
          Visit our comprehensive documentation page on Firebase. 
        </div>
        <div className='integration-text-subheader'>
          Step 2: Obtain 
        </div>
        <div className='integration-text-description'>
          Your API Key To start making requests to the API, you need to generate an API key. 
        </div>
        <div className='integration-text-subheader'>
          Step 3: Implement Characters into Your Application
        </div>
        <div className='integration-text-description'>
          With the API responses, you can seamlessly integrate characters into your application. 
        </div>
        <div className='integration-buttons-api-docs'>API Docs</div>
      </div>
    </div>
  )
}

export default IntegrationSection;