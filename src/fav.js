
import { Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';


function Fav() {
    const [cars, setCars] = useState([]);
    
    const getFavCar =() =>{
        const allFaveCar = JSON.parse(localStorage.getItem('favoriteCar'));
        setCars(allFaveCar);
    
    };
    const favCarToDelte =(stockNumber) =>{
        const allFaveCar = JSON.parse(localStorage.getItem('favoriteCar'));
        console.log("before",allFaveCar);
        allFaveCar.splice(allFaveCar.findIndex(a => a.stockNumber === stockNumber) , 1);
        setCars(allFaveCar);
        localStorage.setItem('favoriteCar', JSON.stringify(allFaveCar));

    };

    useEffect(() => {
        getFavCar();
    },[]);
     
    return (
        <div >
            {cars.map((car,index) => (
                <Row key={index} className="carItem" >
                    <Col>
                        <p>{car.manufacturerName}</p>
                        <p>{`Stock ${car.manufacturerName}-${car.mileage.number} ${car.mileage.unit}  - ${car.manufacturerName} - ${car.color}`}</p>
                        <a href="#" onClick ={()=>favCarToDelte(car.stockNumber)} >Delete</a>
                    </Col>
                </Row>

            ))}
        </div>
    )
}
export default Fav;