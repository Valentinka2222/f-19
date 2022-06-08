import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = '←';
  let isNextPageAvailable = '→';
  let disabled;
  if (totalItems % itemsPerPage) {
    disabled = true;
    isNextPageAvailable = null;
  } else {
    disabled = false;
  }
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {currentPage <= 1 ? null : isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={disabled}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
