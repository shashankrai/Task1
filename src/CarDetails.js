// @flow
import type { Node } from 'react';
import React, { useState, useEffect } from 'react';
import { Row, Col, Button ,Container } from 'react-bootstrap';
import {GET_CAR_URL} from './config'
import {LOCALE} from './constants'
import { useHistory } from 'react-router-dom';

type Props = {
  match: Object,
};

const CarDetails =({match}:Props):Node => {
    const history = useHistory();

    const [car, setCars] = useState({});
    const {carAvailiable ,saveFav ,saveBtn,localStorageKey} =LOCALE ;
    useEffect(() => {
     fetch(`${GET_CAR_URL}${match.params.id}`)
        .then(results => results.json())
        .then(data => {
          setCars(data.car);
        }).catch(err =>{
            history.push("/notFound");
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const saveToFavorite  =(carDetail) =>{
        const addedCar = JSON.parse(localStorage.getItem(localStorageKey)  || '[]');
        const index = addedCar.findIndex((e) => e.stockNumber === carDetail.stockNumber);
        if(index ===-1){
            addedCar.push(carDetail);
            localStorage.setItem(localStorageKey, JSON.stringify(addedCar));
            alert("Added to your favourite list, Please see favourite section");
        } else {
        alert("This Car is already added to favourite list");
        }
    };
    


    return (
         car&&<Container fluid style ={{"height":"800px"}} className="carDetails">
            <Row>
                <Col sm="12"> 
                    <div className="carDetailsPicture">
                        <img src={car.pictureUrl} alt="Auto1" />
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center" style ={{"marginTop":"24px"}}>
                <Col sm="6" >
                <p className="carName">{car.manufacturerName}</p>
                {car.stockNumber && <p className ="carDesc">
                    {`Stock # ${car.stockNumber}- ${car.fuelType}
                  ${car.mileage.number} ${car.mileage.unit} - ${car.color} `}
                </p>
                }
               <p>{carAvailiable}</p>
                </Col>
                <Col sm="4">
                    <div className ="carSave">
                        <p className ="car-specification">{saveFav}</p>
                        <Button type="submit" onClick ={()=> saveToFavorite(car)} className="custom-filterBtn float-right" data-testid="saveBtn">{saveBtn}</Button>
                    </div>
                  
                </Col>
            </Row>
        </Container>
    )
}
export default CarDetails;