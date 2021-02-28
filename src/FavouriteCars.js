
import { Row, Col ,Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {LOCALE} from './constants'

function Fav() {
    const [cars, setCars] = useState([]);
    const {localStorageKey ,noSaveFav} =LOCALE;
    
    const getFavCar =() =>{
        const allFaveCar = JSON.parse(localStorage.getItem(localStorageKey));
        setCars(allFaveCar);
    
    };
    const favCarToDelte =(stockNumber) =>{
        const allFaveCar = JSON.parse(localStorage.getItem(localStorageKey));
        allFaveCar.splice(allFaveCar.findIndex(a => a.stockNumber === stockNumber) , 1);
        setCars(allFaveCar);
        localStorage.setItem(localStorageKey, JSON.stringify(allFaveCar));

    };

    useEffect(() => {
        getFavCar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
     
    return (
        <div >
            
            {cars.length !==0 ?     
            <>{cars.map((car,index) => (
                <Row key={index} className="carItem" >
                    <Col sm="4"><img src={car.pictureUrl} alt={car.manufacturerName} className="car-image"></img></Col>
                    <Col sm="8">
                        <p>{car.manufacturerName}</p>
                        <p>{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                        <Button onClick ={()=>favCarToDelte(car.stockNumber)} >Delete</Button>
                    </Col>
                </Row>

            ))} </> : <h1>{noSaveFav}</h1>}
        </div>
    )
}
export default Fav;