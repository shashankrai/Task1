import logo from './logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Dropdown ,Form ,Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Car from './car';
import Pagination from './pagination';


function App() {
  const [cars, setCars] = useState([]);
  const [loading, setloading] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [color, setColor] = useState([]);
  const [manufacturerName, setmanufacturerName] = useState([]);


  const DataFormatting = (data) => {
    const colors = data.map(item => item.color)
      .filter((value, index, self) => self.indexOf(value) === index);

    const manufacturerNames = data.map(item => item.manufacturerName)
      .filter((value, index, self) => self.indexOf(value) === index);
    setmanufacturerName(manufacturerNames);
    setColor(colors);

  };
  const FilteredData = (data) => {
    const filter = {
      color: 'blue',
      manufacturerName: 'Chrysler'
    };
    const filterCar = data.filter((item) => {
      for (let key in filter) {
        if (item[key] === undefined || item[key] !== filter[key])
          return false;
      }
      return true;
    });
    return filterCar;

  };
  console.log("pages", color, manufacturerName);

  React.useEffect(() => {
    fetch('https://auto1-mock-server.herokuapp.com/api/cars')
      .then(results => results.json())
      .then(data => {
        setCars(data.cars);
        const pages = Math.ceil(data.totalCarsCount / data.totalPageCount);
        setPageCount(10);
        setTotalPages(data.totalPageCount);
        DataFormatting(data.cars);
        FilteredData(data.cars);
      });
  }, [setTotalPages, setPageCount]);




  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="Auto1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Purchase</Nav.Link>
            <Nav.Link href="#deets">My Orders</Nav.Link>
            <Nav.Link href="#deets">Sell</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="space-inbtw">
        <Row>
          <Col xs="4">
            <div className="filter">
                <Form>
                  <fieldset>
                    <Form.Group>
                      <Form.Label htmlFor="disabledTextInput">Color</Form.Label>
                      <Form.Control as="select" id="disabledSelect">
                        <option>color</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="disabledSelect">Manufacturer</Form.Label>
                      <Form.Control as="select" id="disabledSelect">
                        <option>manufacturers</option>
                      </Form.Control>
                    </Form.Group>
                    <Button type="submit">Filter</Button>
                  </fieldset>
                </Form>
            </div>
          </Col>
          <Col xs="8">
            <p>Availiable Cars  </p>
          <span>Showing 10 of {pageCount} results</span>
            <Car data={cars}></Car>
            <Pagination totalPages={totalPages} currentPage={1} className="ml-auto"></Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
