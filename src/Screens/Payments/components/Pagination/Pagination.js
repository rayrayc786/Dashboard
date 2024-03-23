import React from "react";
import RightArrow from "../../../../assets/icons/RightArrow.svg";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import './Pagination.scss';
function Pagination({
  prevPage,
  nextPage,
  currentPage,
  npages,
  maxPagesToShow,
  changeCPage,
}) {
  function renderPages() {
    const pages = [];
    if (npages <= maxPagesToShow) {
      for (let i = 1; i <= npages; i++) {
        pages.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <a href="#" className="page-link" onClick={() => changeCPage(i)}>
              {i}
            </a>
          </li>
        );
      }
    } else {
      const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
      let startPage = currentPage - halfMaxPagesToShow;
      let endPage = currentPage + halfMaxPagesToShow;

      if (currentPage - halfMaxPagesToShow <= 0) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + halfMaxPagesToShow >= npages) {
        startPage = npages - maxPagesToShow + 1;
        endPage = npages;
      }

      if (startPage > 1) {
        pages.push(
          <li key={1} className="page-item">
            <a href="#" className="page-link" onClick={() => changeCPage(1)}>
              1
            </a>
          </li>
        );
        if (startPage > 2) {
          pages.push(
            <li key="ellipsis-start" className="page-item">
              <span className="page-link">...</span>
            </li>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <a href="#" className="page-link" onClick={() => changeCPage(i)}>
              {i}
            </a>
          </li>
        );
      }

      if (endPage < npages) {
        if (endPage < npages - 1) {
          pages.push(
            <li key="ellipsis-end" className="page-item">
              <span className="page-link">...</span>
            </li>
          );
        }
        pages.push(
          <li key={npages} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => changeCPage(npages)}
            >
              {npages}
            </a>
          </li>
        );
      }
    }
    return pages;
  }
  return (
    <div className="pagination">
      <div className="previous" onClick={prevPage} disabled={currentPage === 1}>
        <img src={LeftArrow}></img>
        <span>Previous</span>
      </div>
      {renderPages()}
      <div
        className="previous"
        onClick={nextPage}
        disabled={currentPage === npages}
      >
        <span>Next</span>
        <img src={RightArrow}></img>
      </div>
    </div>
  );
}

export default Pagination;
