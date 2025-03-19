import React from 'react';
import "./index.css";

const ReadyToGetStarted = () => {
  return (
    <div className="ready-to-start">
      <div className="content">
        <div className='content-left'>
          <h2>Ready to Get Started?</h2>
          <p>Dive into our comprehensive documentation and start querying our bank of characters.</p>
        </div>
        <div className='content-right'>
          <button className='dashboard-buttons-get-started-free'>
            Get Started Free
            <img src="/images/next-right.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
