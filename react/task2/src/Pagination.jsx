import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = '←';
  let isNextPageAvailable = '→';
  let disabled;
  if (totalItems % itemsPerPage) {
    disabled = false;
  }
  if (totalItems % itemsPerPage == 1) {
    isNextPageAvailable = null;
    disabled = true;
  }
  if (currentPage >= 1) {
    isPrevPageAvailable = null;
  }
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={disabled}>
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
