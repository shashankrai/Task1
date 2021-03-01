// @flow
import type { Node } from 'react';
import { Row, Col ,Button, Container} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {LOCALE} from './constants'

const Fav = ():Node => {
    const [cars, setCars] = useState([]);
    const {localStorageKey ,noSaveFav} =LOCALE;
    
    const getFavCar =() =>{
        const allFaveCar = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
        setCars(allFaveCar);
    
    };
    const favCarToDelte =(stockNumber) =>{
        const allFaveCar = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
        allFaveCar.splice(allFaveCar.findIndex(a => a.stockNumber === stockNumber) , 1);
        setCars(allFaveCar);
        localStorage.setItem(localStorageKey, JSON.stringify(allFaveCar));

    };

    useEffect(() => {
        getFavCar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
     
    return (
        <Container>
            {cars.length !==0 ?     
            <>{cars.map((car,index) => (
                <Row key={index} className="carItem" >
                    <Col sm="4"><img src={car.pictureUrl} alt={car.manufacturerName} className="car-image"></img></Col>
                    <Col sm="8">
                        <p className="carName">{car.manufacturerName}</p>
                        <p className="carDesc">{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                        <Button onClick ={()=>favCarToDelte(car.stockNumber)} className="custom-filterBtn" data-testid="delete">Delete</Button>
                    </Col>
                </Row>

            ))} </> : <h4 className="text-center mt-4">{noSaveFav} <a href="/">HomePage</a></h4>}
        </Container>
    )
}
export default Fav;