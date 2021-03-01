import '@testing-library/jest-dom/extend-expect';
import { render,screen} from '@testing-library/react';
import React from 'react';
import App from '../../components/header';


describe('testing Header component', () => {
  it('has purchase in header', () => {
    render(<App />);
    const linkElement = screen.getByText('Purchase');
    expect(linkElement).toBeInTheDocument();
  });
});
   