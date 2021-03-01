import '@testing-library/jest-dom/extend-expect';
import { render,screen,fireEvent} from '@testing-library/react';
import React from 'react';
import App from '../../components/pagination';


describe('testing App component', () => {
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:1,
        totalPages:1,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const linkElement = screen.getByText('First');
    // fireEvent.change(screen.getByTestId("customSelectcolor"), {
    //     //     target: { value: "green" },
    //     //   });
    // expect(linkElement).toBeInTheDocument();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:1,
        totalPages:2,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const linkElement = screen.getByText('First');
    // fireEvent.change(screen.getByTestId("customSelectcolor"), {
    //     //     target: { value: "green" },
    //     //   });
    // expect(linkElement).toBeInTheDocument();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:2,
        totalPages:2,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const linkElement = screen.getByText('First');
    // fireEvent.change(screen.getByTestId("customSelectcolor"), {
    //     //     target: { value: "green" },
    //     //   });
    // expect(linkElement).toBeInTheDocument();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:3,
        totalPages:2,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const linkElement = screen.getByText('First');
    // fireEvent.change(screen.getByTestId("customSelectcolor"), {
    //     //     target: { value: "green" },
    //     //   });
    // expect(linkElement).toBeInTheDocument();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:3,
        totalPages:4,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const previousBtn  = screen.getByText('Previous');;
    fireEvent.click(previousBtn);
    expect(defaultProps.paginate).toBeCalled();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:2,
        totalPages:4,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const previousBtn  = screen.getByText('Next');;
    fireEvent.click(previousBtn);
    expect(defaultProps.paginate).toBeCalled();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:2,
        totalPages:4,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const previousBtn  = screen.getByText('Last');;
    fireEvent.click(previousBtn);
    expect(defaultProps.paginate).toBeCalled();
  });
  it('has purchase in loader', () => {
    const defaultProps ={
        currentPage:2,
        totalPages:4,
        paginate :jest.fn()
    }
    render(<App {...defaultProps} />);
    const previousBtn  = screen.getByText('First');;
    fireEvent.click(previousBtn);
    expect(defaultProps.paginate).toBeCalled();
  });
});
   