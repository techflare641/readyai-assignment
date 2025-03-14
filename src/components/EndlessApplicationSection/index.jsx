import React from "react";
import "./index.css";

const EndlessApplicationSection = () => {
  return (
    <div className="endless-application-section">
      <div>
        <div className="endless-application-card">
          <img className='endless-application-card-image' src="/images/person-icon.png" />
          <div className='endless-application-card-header'>
            AI-Powered Customer Service Bots
          </div>
          <div className='endless-application-card-description'>
            Enhance your customer service experience with AI-powered bots that interact with personalized, dynamic characters. Provide efficient and engaging support with characters that can adapt to any customer query, ensuring satisfaction and swift resolution.
          </div>
        </div>
      </div>
      <img src="/images/endless-section.png" />
      <div>
        <div className="endless-application-card">
          <img className='endless-application-card-image' src="/images/person-icon.png" />
          <div className='endless-application-card-header'>
            AI-Powered Customer Service Bots
          </div>
          <div className='endless-application-card-description'>
            Enhance your customer service experience with AI-powered bots that interact with personalized, dynamic characters. Provide efficient and engaging support with characters that can adapt to any customer query, ensuring satisfaction and swift resolution.
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndlessApplicationSection;