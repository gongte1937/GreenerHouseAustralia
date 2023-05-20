import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Footer.scss'; // Import the CSS file
import logo from '../assets/img/logo.jpeg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
          <Image src={logo} rounded width={30} height={25} className='mb-1 me-2' />
            <span className="footer-logo-text">Greener House Australia</span>
          </div>
          <p className="footer-description">
            We are dedicated to providing eco-friendly cleaning services to transform your house into a clean and sustainable home.
          </p>
          <div className="footer-social-icons">
            <a href="/" className="footer-icon-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="footer-icon-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="footer-icon-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li className="footer-link-item">
              <a href="/">Home</a>
            </li>
            <li className="footer-link-item">
              <a href="/about">About</a>
            </li>
            <li className="footer-link-item">
              <a href="/services">Services</a>
            </li>
            <li className="footer-link-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span className="footer-bottom-text">© {new Date().getFullYear()} Greener House Australia. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
