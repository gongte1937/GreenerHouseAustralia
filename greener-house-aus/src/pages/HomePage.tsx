import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../assets/img/WechatIMG29.jpeg'
import img2 from '../assets/img/WechatIMG30.jpeg'
import img3 from '../assets/img/WechatIMG31.jpeg'

import './HomePage.scss'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content text-center">
          <h2 className="hero-subtitle">Transforming your house into a clean and eco-friendly home</h2>
        </div>
      </header>
      <section className="services-section">
        <Container>
          <h2 className="section-title text-center">Our Services</h2>
          <div className="services-grid">
            <div className="service-card text-center">
              <img src={img1} alt="Service 1" />
              <h3>House Cleaning</h3>
              <p>We provide thorough and reliable cleaning services for your home.</p>
            </div>
            <div className="service-card text-center">
            <img src={img2} alt="Service 2" />
              <h3>Airbnb  Cleaning</h3>
              <p>We offer professional cleaning solutions for commercial spaces.</p>
            </div>
            <div className="service-card text-center">
            <img src={img3} alt="Service 3" />
              <h3>House Care</h3>
              <p>Our deep cleaning services ensure a spotless and hygienic environment.</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="testimonials-section">
        <Container>
          {/* <h2 className="section-title text-center">Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card text-center">
              <img src="/images/testimonial1.jpg" alt="Testimonial 1" />
              <blockquote>
                <p>"Greener House Australia exceeded my expectations. They provided exceptional service and left my house looking spotless. I highly recommend them!"</p>
                <cite>- Jane Smith</cite>
              </blockquote>
            </div>
            <div className="testimonial-card text-center">
              <img src="/images/testimonial2.jpg" alt="Testimonial 2" />
              <blockquote>
                <p>"I'm extremely satisfied with the level of cleanliness Greener House Australia achieved. Their attention to detail is commendable. I will definitely hire them again."</p>
                <cite>- John Doe</cite>
              </blockquote>
            </div>
          </div> */}
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
