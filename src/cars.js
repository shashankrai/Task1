import React, { useState, useEffect } from 'react';
import { Row, Col, Button ,Container } from 'react-bootstrap';


function Mycar({match}) {
    const [car, setCars] = useState({});
    useEffect(() => {
     fetch(`https://auto1-mock-server.herokuapp.com/api/cars/${match.params.id}`)
        .then(results => results.json())
        .then(data => {
          setCars(data.car);
        });
    }, []);
       

    return (
         car&&<Container>
            <Row>
                <Col xs="12"> 
                    <img src={car.pictureUrl} className="carshow" alt="Auto1" />
                </Col>
            </Row>
            <Row>
                <Col xs="5">
                <p>{car.manufacturerName}</p>
                {car.stockNumber && <p>
                    {`Stock # ${car.stockNumber}- ${car.fuelType}
                  ${car.mileage.number} ${car.mileage.unit} - ${car.color} `}
                </p>
                }
               
                            <p> This car is currently available and can be delivered as soon as
                            tomorrow morning. Please be aware that delivery times shown in
                            this page are not definitive and may change due to bad weather
                            conditions.
                    </p>
                </Col>
                <Col xs="5">
                    <p> If you like this car, click the button and
                    save it in your collection of favourite items.
                    </p>
                    <Button type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Mycar;