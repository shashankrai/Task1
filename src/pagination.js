
import React from 'react';

const Pagination = ({ currentPage, totalPages,paginate }) => {
const current =currentPage;
const previous =currentPage-1;
const next = currentPage+1;
const last = totalPages;

  return (
    <nav>
      <ul className='pagination'>
        <>
            <li className='page-item'>
                <a onClick={() => paginate(1)} href='#' className='page-link'>
                {'First'}
                </a>
            </li>
            <li  className='page-item'>
            <a onClick={() => paginate(previous)} href='#' className='page-link'>
            {'Previous'}
            </a>
            </li>
            <li className='page-item'>
            <a className='page-link'>
                    {`page ${current} of ${last}`}
            </a>
            </li>
            <li className='page-item'>
            <a onClick={() => paginate(next)} href='#' className='page-link'>
            {'Next'}
            </a>
        </li>
            <li className='page-item'>
            <a onClick={() => paginate(last)} href='#' className='page-link'>
            {'Last'}
            </a>
        </li>
        </>
      </ul>
    </nav>
  );
};

export default Pagination;