import '@testing-library/jest-dom/extend-expect';
import { render,screen ,fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import App from '../CarDetails';
import ReactDOM from "react-dom";

describe('testing Car detail component', () => {
   it("renders without crashing", () => {
    const dataprops = {
      match : {params  :{
          id :6
      }}
  }
    const div = document.createElement("div");
    ReactDOM.render(<App {...dataprops} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Testing Available car text in car detail page', () => {
    const dataprops = {
        match : {params  :{
            id :6
        }}
    }
    render(<App  {...dataprops}/>);
    const linkElement = screen.getByText(/This car is currently available/i);
    expect(linkElement).toBeInTheDocument();
  });
 
  it("App loads with initial state with no car data", () => {
    const dataprops = {
      match : {params  :{
          id :6
      }}
   };
    window.alert = jest.fn();
    const { container } = render(<App {...dataprops}/>);
    const saveBtn = getByTestId(container, "saveBtn");
    fireEvent.click(saveBtn);
    expect(window.alert).toBeCalled();
  });

  it("on saved data to localost window alert called", () => {
    const dataprops = {
      match : {params  :{
          id :6
      }}
   };
    window.alert = jest.fn();
    const { container } = render(<App {...dataprops}/>);
    const saveBtn = getByTestId(container, "saveBtn");
    fireEvent.click(saveBtn,{
      stockNumber: 6,
      manufacturerName: 'Dodge',
      modelName: 'Caliber',
      color: 'silver',
      mileage: { number: 101681, unit: 'km' },
      fuelType: 'Petrol',
      pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    });
    expect(window.alert).toBeCalled();
  });

  it('on load component use effect called', () => {
    const dataprops = {
      match : {params  :{
          id :6
      }}
   };
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    render(<App {...dataprops}/>);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/cars/6');
    global.fetch.mockClear();
    });

});
