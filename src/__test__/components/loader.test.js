import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../../components/loader';
import ReactDOM from "react-dom";


describe('testing loader component', () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
   