import React, { useState, useEffect } from 'react';
import { Row, Col, Button ,Container } from 'react-bootstrap';
import {GET_CAR_URL} from './config'
import {LOCALE} from './constants'

function CarDetails({match}) {
    const [car, setCars] = useState({});
    const {carAvailiable ,saveFav ,saveBtn ,localStorageKey} =LOCALE ;
    useEffect(() => {
     fetch(`${GET_CAR_URL}${match.params.id}`)
        .then(results => results.json())
        .then(data => {
          setCars(data.car);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const saveToFavorite  =(carDetail) =>{
        const addedCar = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        const index = addedCar.findIndex((e) => e.stockNumber === carDetail.stockNumber);
        if(index ===-1){
            addedCar.push(carDetail);
            localStorage.setItem(localStorageKey, JSON.stringify(addedCar));
        };
    };
    


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
               <p>{carAvailiable}</p>
                </Col>
                <Col xs="5">
                    <p> {saveFav}
                    </p>
                    <Button type="submit" onClick ={()=> saveToFavorite(car)}>{saveBtn}</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default CarDetails;