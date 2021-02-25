
import { Row, Col } from 'react-bootstrap';
import React from 'react';


function Car({ data }) {
    return (
        <div >
            {data.map((car,index) => (
                <Row key={index} className="carItem" >
                    <Col xs="4"><img src={car.pictureUrl} alt="car" className="car-image"></img></Col>
                    <Col xs="8">
                        <p>{car.manufacturerName}</p>
                        <p>{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                        <a href="#">View details</a>
                    </Col>
                </Row>

            ))}
        </div>
    )
}
export default Car;