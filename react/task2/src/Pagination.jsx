import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let disabled;
  let isPrevPageAvailable = null;
  let isNextPageAvailable = null;

  if (currentPage === 1) {
    isNextPageAvailable = '→';
  } else {
    isNextPageAvailable = '→';
    isPrevPageAvailable = '←';
  }
  if (totalItems % itemsPerPage === 1) {
    isNextPageAvailable = null;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={disabled}>
        {isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={isNextPageAvailable === null ? true : false}
      >
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
