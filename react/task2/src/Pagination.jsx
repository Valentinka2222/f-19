import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems }) => {
  const isPrevPageAvailable = '←';
  const isNextPageAvailable = '→';
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        {currentPage <= 1 ? null : isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={totalItems % 3 ? true : false}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
