// @flow
import logo from '../images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import '../App.scss';
import { LOCALE} from '../constants'
import type { Node } from 'react';


const  Header =(): Node => {
    const {linkPurchase,linkOrders,linkSell,favourites} =LOCALE;
return (
    <header className="mb-4">
        <Navbar collapseOnSelect expand="lg"  className="header">
        <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="Auto1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#" className="link-header">{linkPurchase}</Nav.Link>
            <Nav.Link href="#" className="link-header">{linkOrders}</Nav.Link>
            <Nav.Link href="#" className="link-header">{linkSell}</Nav.Link>
            <Nav.Link href="/favorite" className="link-header">{favourites}</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </header>
    )
}
export default Header;
