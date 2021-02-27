import '../App.scss';
import React from 'react';

const Footer = () => {
return (
    <div className="footer">
       <p className="footerText"> &copy; AUTO1 Group {(new Date().getFullYear())}</p>
    </div>
    )
}
export default Footer;
