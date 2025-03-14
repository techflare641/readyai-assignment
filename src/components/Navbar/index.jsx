import React from 'react';
import "./index.css"

const Navbar = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logo-container'>
          <img src="/images/2_layerstyle.png" alt="layer style" />
          CONVERSATION GENOME PROJECT
        </div>
        <div className='navbar-container'>
          <span>About</span>
          <span>Whitepaper</span>
          <span>Bittensor</span>
          <span>Afterparty 🔗</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;