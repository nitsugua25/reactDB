import React, { useState } from 'react'; // Importez useState depuis React
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCarButton from './HeaderCarButton';


const Header = () => { 

  return (
      <header style={{marginBottom:'40px'}}>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand href='/'>FreeMoney</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <HeaderCarButton />
          </Container>
        </Navbar>
      </header>
  );
}

export default Header;