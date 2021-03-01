import '@testing-library/jest-dom/extend-expect';
import { render,fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import App from '../FavouriteCars';
import ReactDOM from "react-dom";

describe('testing App component', () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);   
  });

  it("intiallaly localstorage will be null", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    expect(window.localStorage.getItem("favoriteCar")).toBe(null);
  });

  it("Adding data to local storage", () => {
    const div = document.createElement("div");
    const data =  [{
        color: "green",
        fuelType: "Diesel",
        manufacturerName: "Chrysler",
        mileage: {number: 125582, unit: "km"},
        modelName: "Vision",
        pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
        stockNumber: 10067,
    }];    
    window.localStorage.setItem('favoriteCar', JSON.stringify(data));
    const carsData = JSON.parse(window.localStorage.getItem("favoriteCar"));
    ReactDOM.render(<App />, div);
    expect(carsData instanceof Array).toBe(true);
  });
  it("Delteing data from local storage", () => {
    const favCarToDelte =jest.fn();
    const data =  [{
        color: "green",
        fuelType: "Diesel",
        manufacturerName: "Chrysler",
        mileage: {number: 125582, unit: "km"},
        modelName: "Vision",
        pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
        stockNumber: 10067,
    }];    
    window.localStorage.setItem('favoriteCar', JSON.stringify(data));
    const { container } = render(<App />);
    const deleteBtn = getByTestId(container, "delete");
    fireEvent.click(deleteBtn);
    expect(favCarToDelte).not.toBeCalled();
  });

});
