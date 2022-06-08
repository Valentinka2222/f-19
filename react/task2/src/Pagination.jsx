import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = '←';
  let isNextPageAvailable = '→';
  let disabled = false;
  if (totalItems < itemsPerPage) {
    disabled = true;
    isNextPageAvailable = null;
  } else if (totalItems % itemsPerPage) {
    disabled = false;
  } else if (currentPage === 1) {
    isPrevPageAvailable = null;
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
