import '../App.scss';
import React from 'react';
import { LOCALE} from '../constants'

const Footer = () => {
    const {footerText} = LOCALE;
return (
    <div className="footer">
       <p className="footerText"> &copy; {footerText} {(new Date().getFullYear())}</p>
    </div>
    )
}
export default Footer;
