import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4} className="footer-logo">
            <h2>Greener House Australia</h2>
            <p>Transforming your house into a clean and eco-friendly home</p>
          </Col>
          <Col xs={12} md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="footer-contact">
            <h5>Contact Us</h5>
            <p>
              Address: 123 Green Street, Melbourne, VIC 3000<br />
              Phone: (123) 456-7890<br />
              Email: info@greenerhouse.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
