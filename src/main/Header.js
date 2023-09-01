import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import botImage from '../bot.png';
import './style.css'
function Header() {
  return (
    <>
    
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">99 SOCA <img className='logo-header' src={botImage} alt="botimg" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://99digits.com/">Home</Nav.Link>
            <Nav.Link className='rgb' href="#features">AI</Nav.Link>
            <Nav.Link href="https://99digits.com/contact-us/">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header