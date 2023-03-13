import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';


export const Pagination = ({totalPages, onPageChange,initialPage}) => {
  // const [page, setPage] = useState(1);

  return (
    <div className="pagination-wrapper">
      <ReactPaginate
      nextLabel={renderIcons('right', iconSize.sm)}
      previousLabel={renderIcons('left', iconSize.sm)}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        // initialPage={initialPage}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel={renderIcons('ellipsis', iconSize.sm)}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination-container"
        activeLinkClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
    
  )
}


Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  // initialPage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


