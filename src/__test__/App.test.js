import '@testing-library/jest-dom/extend-expect';
import { render,screen ,fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import App from '../App';
import ReactDOM from "react-dom";
jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);

describe('testing App component', () => {
  it('Testing Available car text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Availiable Cars/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("App loads with initial state of  page 1 and o car", () => {
    const { container } = render(<App />);
    const countValue = getByTestId(container, "pageCount");
    expect(countValue.textContent).toBe("Showing 0 of 0 results");
  });

});
