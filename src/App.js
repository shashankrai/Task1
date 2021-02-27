import './App.css';
import { Container, Row, Col,Form ,Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Car from './car';
import Pagination from './pagination';


function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setloading] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [color, setColor] = useState([]);
  const [manufacturerName, setmanufacturerName] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showNext, setShowNext] = useState(false);
  const [showPreviuos, setShowPreviuos] = useState(false);
  const [totalCars ,setTotalCars] = useState(0);


  const getHeaders = () =>{
      const defaultHeader ={};
      if (selectedColor) {
        defaultHeader.color =selectedColor;
      }
      if (selectedType) {
         defaultHeader.manufacturer =selectedType;
      }
      defaultHeader.sort ='asc';
      defaultHeader.page =currentPage;
      return defaultHeader;

  }

  useEffect(() => {
      const headers = getHeaders();
      fetch('https://auto1-mock-server.herokuapp.com/api/cars?' + new URLSearchParams(headers))
      .then(results => results.json())
      .then(data => {
        setCars(data.cars);
        setPageCount(data.cars.length);
        setTotalPages(data.totalPageCount);
        setTotalCars(data.totalCarsCount)
      });
  }, [currentPage, totalPages]);

  useEffect(() => {
    Getcolor();
    GetManufacturer();
  },[]);


  const Getcolor =() =>{
    fetch('https://auto1-mock-server.herokuapp.com/api/colors')
    .then(results => results.json())
      .then(data => {
        const colorsData = data.colors;
        colorsData.unshift('All car colors');
        setColor(colorsData);
      });

   }
   const GetManufacturer =() =>{
    fetch('https://auto1-mock-server.herokuapp.com/api/manufacturers')
    .then(results => results.json())
      .then(data => {
        const manufacturer = data.manufacturers.map(item => item.name);
        manufacturer.unshift('All car colors');
        setmanufacturerName(manufacturer);
      });

   }
  const onChangeColor =(event) =>{
    setSelectedColor(event.target.value);
  }
  const onChangeManufacture =(event) =>{
    setSelectedType(event.target.value);
  }

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }
   
const onFormSubmit =(event) => {
    event.preventDefault();
    if(selectedType===null && selectedColor===null ){
      alert("Please select filter Data");
    } else{
      const headers = getHeaders();
      fetch('https://auto1-mock-server.herokuapp.com/api/cars?' + new URLSearchParams(headers))
        .then(results => results.json())
        .then(data => {
          setCars(data.cars);
          setPageCount(data.cars.length);
          setTotalPages(data.totalPageCount);
          setTotalCars(data.totalCarsCount);
        });

    }
  
}

  return (
    <> 
      <Container fluid className="space-inbtw">
        <Row>
          <Col xs="4">
            <div className="filter">
                <Form onSubmit={onFormSubmit}>
                  <fieldset>
                    <Form.Group>
                      <Form.Label htmlFor="disabledTextInput">Color</Form.Label>
                      <Form.Control as="select" id="disabledSelect"  onChange={(e) => onChangeColor(e)}>
                        {color.map((item,index) => (
                            <option key={index} value ={item}>{item}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">Manufacturer</Form.Label>
                      <Form.Control as="select" id="disabledSelect" onChange={(e) => onChangeManufacture(e)}>
                      {manufacturerName.map((item,index) => (
                            <option key={index} value ={item}>{item}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Button type="submit">Filter</Button>
                  </fieldset>
                </Form>
            </div>
          </Col>
          <Col xs="8">
            <p>Availiable Cars  </p>
          <span>Showing {pageCount} of {totalCars} results</span>
            <Car data={cars}></Car>
            <Pagination
              currentPage ={currentPage}
              totalPages ={totalPages}
              showNext ={showNext}
              showPreviuos ={showPreviuos}
              paginate={paginate}
             
           />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cars;
