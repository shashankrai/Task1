import logo from './logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';


function Header () {
return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="Auto1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#">Purchase</Nav.Link>
            <Nav.Link href="#">My Orders</Nav.Link>
            <Nav.Link href="#">Sell</Nav.Link>
            <Nav.Link href="/favorite">Favourites</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
}
export default Header;
