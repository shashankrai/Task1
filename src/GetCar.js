// @flow
import type { Node } from 'react';
import { Row, Col ,Container } from 'react-bootstrap';
import React from 'react';
import MyLoader from './components/loader'
import {LOCALE} from './constants';
type Props = {
  data: Object,
  loading: boolean,
};

const Getcar = ({ data,loading }:Props): Node=> {
    const {viewDetailBtn} =LOCALE;
    return (
        <Container fluid >
            {loading ===true  ? <MyLoader/> : 
            data.map((car,index) => (
                <Row key={index} className="carItem" >
                        <>
                            <Col sm="4"><img src={car.pictureUrl} alt={car.manufacturerName} className="car-image"></img></Col>
                            <Col sm="8">
                                <p className="carName">{car.manufacturerName}</p>
                                <p className ="carDesc">{`Stock # ${car.manufacturerName} - ${car.mileage.number} ${car.mileage.unit} - ${car.manufacturerName} - ${car.color}`}</p>
                                <a href ={`car/${car.stockNumber}`} className ="savebtn" data-testid="viewBtn" >{viewDetailBtn}</a>
                            </Col>
                        </>    
                </Row>
            ))
            }
        </Container>
    )
}
export default Getcar;