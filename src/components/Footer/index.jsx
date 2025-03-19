import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="highlight-line"></div>
      <div className="footer-content">
        <div className="logo-section">
          <img src="/images/Group.png" width="100" height="100" />
          <p className="footer-text">Conversation Genome Project</p>
        </div>

        <div className="links-section">
          <div className="links-group">
            <h3>Info</h3>
            <ul>
              <li>Whitepaper</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="links-group">
            <h3>Social</h3>
            <ul>
              <li>Whitepaper</li>
              <li>X / Twitter</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div className="links-group">
            <h3>Helpful Links</h3>
            <ul>
              <li>Bittensor</li>
              <li>Afterparty</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
