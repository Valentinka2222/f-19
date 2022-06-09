import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = '←';
  let isNextPageAvailable = '→';
  let disabled;

  if (totalItems % itemsPerPage == 1) {
    isNextPageAvailable = null;
  }
  if (currentPage === 1) {
    isPrevPageAvailable = null;
  }
  if (isNextPageAvailable === null) {
    disabled = !disabled;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={disabled}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
