
import { Row, Col ,Container } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";
import MyLoader from './components/loader'
import {LOCALE} from './constants'



const Getcar = ({ data,loading }) => {
    const {viewDetailBtn} =LOCALE;

    return (
        <Container fluid >
            {data.map((car,index) => (
                <Row key={index} className="carItem" >
                    {loading ===true  ? <MyLoader/>  :
                        <>
                            <Col sm="4"><img src={car.pictureUrl} alt="car" className="car-image"></img></Col>
                            <Col sm="8">
                                <p>{car.manufacturerName}</p>
                                <p>{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                                <Link to={`/car/${car.stockNumber}`} className ="savebtn" >{viewDetailBtn}</Link>
                            </Col>
                        </>
                    }
                </Row>

            ))}
        </Container>
    )
}
export default Getcar;