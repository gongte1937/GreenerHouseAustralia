import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.jpeg'
import {NavLink} from "react-router-dom"
import Image from 'react-bootstrap/Image';
const Header: React.FC = () => {
  return (
    <Navbar bg="light" className='shalow-sm mb-3' expand="lg">
      <Container>
        <Navbar.Brand href="/"  className="me-auto" >
          <Image src={logo} rounded width={30} height={25} className='mb-1 me-1' />
          Greener House Australia
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link to= "/"as={NavLink}>Home</Nav.Link>
            <Nav.Link to= "/about" as={NavLink}>About</Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="dark" className='ms-4'>Book Now</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
