import React from 'react';
import { Container} from 'react-bootstrap';
import {LOCALE} from './constants'
import logo from './images/logo.png';


function NotFound() {
    const {notFound,notFoundMessage}  = LOCALE;
    return (
        <Container fluid style={{'height':'800px','text-align':'center'}}>
            <div className="notFound">
                <div><img src={logo} className="App-logo" alt="Auto1" /></div>
                <h2>{notFound}</h2>
                <h4>{notFoundMessage} <a href ="/">Homepage.</a></h4>
            </div>
        </Container>
       
    )
}
export default NotFound;