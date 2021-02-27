import logo from '../images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import '../App.scss';



function Header () {
return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" className="header">
        <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="Auto1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#" className="link-header">Purchase</Nav.Link>
            <Nav.Link href="#" className="link-header">My Orders</Nav.Link>
            <Nav.Link href="#" className="link-header">Sell</Nav.Link>
            <Nav.Link href="/favorite" className="link-header">Favourites</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
}
export default Header;
