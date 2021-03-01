import '@testing-library/jest-dom/extend-expect';
import { render,screen} from '@testing-library/react';
import React from 'react';
import App from '../../components/footer';


describe('testing Footer component', () => {
  it('has auto text in footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/AUTO1 Group/i);
    expect(linkElement).toBeInTheDocument();
  });
});
   