
import { Row, Col } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";


function Car({ data }) {
    return (
        <div >
            {data.map((car,index) => (
                <Row key={index} className="carItem" >
                    <Col xs="4"><img src={car.pictureUrl} alt="car" className="car-image"></img></Col>
                    <Col xs="8">
                        <p>{car.manufacturerName}</p>
                        <p>{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                        <Link to={`/car/${car.stockNumber}`}>View details</Link>
                    </Col>
                </Row>

            ))}
        </div>
    )
}
export default Car;