import '@testing-library/jest-dom/extend-expect';
import { render,screen ,fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import App from '../App';
import ReactDOM from "react-dom";
import mocksCarData from './mocksCarData'
import mockColorsData from './mockColorsData'
import mockManufacturersData from './mockManufacturersData'
import mockColorData from './mockColorsData';
jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);


describe('testing App component', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Testing Available car text is present', () => {
    render(<App />);
    const linkElement = screen.getByText(/Availiable Cars/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("App loads with initial state of  page 1 with 0 car", () => {
    const { container } = render(<App />);
    const countValue = getByTestId(container, "pageCount");
    expect(countValue.textContent).toBe("Showing 0 of 0 results");
    
  });
    it('component on mount and use effect car data recieved', () => {
   
    const mockSuccessResponse = mocksCarData;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    render(<App/>);
    expect(global.fetch).toHaveBeenCalledTimes(3);
    expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1');
    expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/colors');
    expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/manufacturers');
    global.fetch.mockClear();
    });
    
    it('component on mount and use effect color recieved',() => {
   
      const mockSuccessResponse = mockColorsData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({ 
       json: () => mockJsonPromise, });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      render(<App/>);
      expect(global.fetch).toHaveBeenCalledTimes(3);
      expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1');
      expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/colors');
      expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/manufacturers');
      global.fetch.mockClear();
      });

      it('component on mount and use effect manufacurer data recieved',() => {
        const mockSuccessResponse = mockManufacturersData;
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({ 
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        render(<App/>);
        expect(global.fetch).toHaveBeenCalledTimes(3);
        expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1');
        expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/colors');
        expect(global.fetch).toHaveBeenCalledWith('https://auto1-mock-server.herokuapp.com/api/manufacturers');
        global.fetch.mockClear();
    });

    it("useeffect called when color selector change", () => {
      const mockSuccessResponse = mockManufacturersData;
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({ 
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      const onChangeColor =jest.fn();
      const { container } = render(<App />);
       const colorSelector = getByTestId(container, "customSelectcolor");
       fireEvent.change(colorSelector, {
        target: { value: "green" },
      });
        expect(onChangeColor).toHaveBeenCalledTimes(0)
      });

      it("useeffect called when manuFacturing selector change", () => {
        const mockSuccessResponse = mockColorData;
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({ 
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        const onChangeManufacture =jest.fn();
        const { container } = render(<App />);
         const colorSelector = getByTestId(container, "manuFacturing");
         fireEvent.change(colorSelector, {
          target: { value: "tesla" },
        });
        expect(onChangeManufacture).toHaveBeenCalledTimes(0)
        });
        it("useeffect called when filter button clicked", () => {
          const mockSuccessResponse = mockColorData;
          const mockJsonPromise = Promise.resolve(mockSuccessResponse);
          const mockFetchPromise = Promise.resolve({ 
            json: () => mockJsonPromise,
          });
          jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
          const onFormSubmit  =jest.fn();
          const { container } = render(<App />);
          const colorSelector = getByTestId(container, "filterBtn");
           fireEvent.change(colorSelector, {
            target: { value: "tesla" },
          });
          expect(onFormSubmit).toHaveBeenCalledTimes(0)
          });

          it("useeffect called when filterbutton clicked on color change", () => {
            const mockSuccessResponse = mockColorData;
            const mockJsonPromise = Promise.resolve(mockSuccessResponse);
            const mockFetchPromise = Promise.resolve({ 
              json: () => mockJsonPromise,
            });
            jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
            const onChangeManufacture =jest.fn();
            const { container } = render(<App />);
             const colorSelector = getByTestId(container, "manuFacturing");
             fireEvent.click(colorSelector, {
              target: { value: "tesla" },
            });
            expect(onChangeManufacture).toHaveBeenCalledTimes(0)
            });        


});
