import logo from './logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';

function Footer () {
return (
    <div>
       <p className="footer"> &copy; AUTO1 Group {(new Date().getFullYear())}</p>
    </div>
    )
}
export default Footer;
