import React from 'react';
import "./index.css"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-contents'>
        <div className='dashboard-contents-tags'>
          <div className='dashboard-contents-tags-tag'>
            V1.3 Released
          </div>
          <div className='dashboard-contents-tags-try'>
          <div className='dashboard-contents-tags-try-text'>
            Try the API Now
          </div>
          <img className='arrow-image' src="/images/arrow-right.png" alt="" />
          </div>
        </div>
        <div className='dashboard-unlock-text'>
          Unlock Infinite AI Character Possibilities
        </div>
        <div className='dashboard-unlock-description'>
          Introducing the Personas API – Your Gateway to AI-Powered Character Interactions
        </div>
        <div className='dashboard-buttons-container'>
          <div className='dashboard-buttons-get-started-free'>
            Get Started Free
            <img src="/public/next-right.png" />
          </div>
          <div className='dashboard-buttons-api-docs'>API Docs</div>
        </div>
      </div>
      <img className='dashboard-images' src='/images/Content.png'>
      </img>
    </div>
  )
}

export default Dashboard;