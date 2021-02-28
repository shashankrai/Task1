import '@testing-library/jest-dom/extend-expect';
import { render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import App from '../App';
import mockCarData from './mocksCarData';
import mockColorData from './mockColorsData';
import mockManufacturersData from './mockManufacturersData';

describe('testing App component', () => {
  it('Testing available car', () => {
    render(<App />);
    const linkElement = screen.getByText(/Availiable Cars/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('check if the component has rendered filter', async () => {
    fetchMock.mockIf(
      'https://auto1-mock-server.herokuapp.com/api/colors',
      () => {
        console.log('mockColorData======================');
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(mockColorData)
        });
      }
    );

    fetchMock.mockIf(
      'https://auto1-mock-server.herokuapp.com/api/manufacturers',
      () => {
        console.log('mockManufacturersData======================');
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(mockManufacturersData)
        });
      }
    );

    fetchMock.mockIf(
      'https://auto1-mock-server.herokuapp.com/api/cars/',
      () => {
        console.log('mockCarData======================');
        return Promise.resolve({
          status: 200,
          body: JSON.stringify(mockCarData)
        });
      }
    );
    const mockFn = jest.fn();
    window.alert = mockFn;
    const renderer = render(<App />);
    const filterBtn = renderer.getByText('Filter');

    const colorFilter = renderer.getByTestId('customSelectcolor');
    userEvent.click(colorFilter);

    const optionRed = await screen.findByDisplayValue('red');

    userEvent.click(filterBtn);
    expect(mockFn).toHaveBeenCalled();
    expect(await screen.findByTestId('result')).toHaveTextContent(
      'Showing 3 of 3 results'
    );
  });
  // test('should clean up side effect', () => {
  //   let id = 'first'
  //   const { rerender } = renderHook(() => {
  //     useEffect(() => {
  //       sideEffect.start(id)
  //       return () => {
  //         sideEffect.stop(id) // this id will get the new value when the effect is cleaned up
  //       }
  //     }, [id])
  //   })
  //   id = 'second'
  //   rerender()
  //   expect(sideEffect.get('first')).toBe(false)
  //   expect(sideEffect.get('second')).toBe(true)
  // })
});
