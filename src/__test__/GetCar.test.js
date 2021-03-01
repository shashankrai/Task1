import '@testing-library/jest-dom/extend-expect';
import { render} from '@testing-library/react';
import React from 'react';
import App from '../GetCar';
import ReactDOM from "react-dom";
import mocksCarData from './mocksCarData'


describe('testing App component', () => {

  it("renders without crashing", () => {
    const defaultProps ={
      data : mocksCarData.cars,
      loading:true
    }
    const div = document.createElement("div");
    ReactDOM.render(<App {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);   
  });
   it('Testing all Available car is render view detail button', () => {
     const defaultProps ={
      data : mocksCarData.cars,
      loading:false
    }
     const { container } = render(<App {...defaultProps} />);
     const button = container.querySelector('a');
     expect(button).toBeInTheDocument();
  });

});
