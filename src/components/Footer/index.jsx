import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="highlight-line"></div>
      <div className="footer-content">
        <div className="logo-section">
          <img src="/images/2_layerstyle.png" alt="layer style" />
          <p className="footer-text">Conversation Genome Project</p>
        </div>

        <div className="links-section">
          <div className="links-group">
            <h3>Info</h3>
            <ul>
              <li><a href="/whitepaper">Whitepaper</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="links-group">
            <h3>Social</h3>
            <ul>
              <li><a href="/whitepaper">Whitepaper</a></li>
              <li><a href="https://twitter.com">X / Twitter</a></li>
              <li><a href="https://discord.com">Discord</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://tiktok.com">TikTok</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
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
