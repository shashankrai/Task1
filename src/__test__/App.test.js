import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
// jest.mock(window);

describe('testing App component', () => {
  
test('Testing available car', () => {
  render(<App />);
  const linkElement = screen.getByText(/Availiable Cars/i);
  expect(linkElement).toBeInTheDocument();
});

it('check if the component has rendered filter', () => {
  const mockFn =jest.fn();
  window.alert = mockFn;
  const renderer = render(<App />) ;
  const filterBtn =renderer.getByText('Filter')
  userEvent.click(filterBtn);
  expect().to
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
