import '@testing-library/jest-dom/extend-expect';
import { render,screen} from '@testing-library/react';
import React from 'react';
import App from '../notFound';


describe('testing Not found component', () => {
  it('has auto text in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/404 -Not found/i);
    expect(linkElement).toBeInTheDocument();
  });
});
   