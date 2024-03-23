import React from "react";
import SortIcon from "../../../../assets/icons/Sort.svg";
import SearchIcon from "../../../../assets/icons/Search.svg";
import DownloadIcon from "../../../../assets/icons/Download.svg";
import { downloadPDF } from "../../../../Utils/downloadData";
import './Sort.scss'
function SearchSortDownload({setSearchData,setSortState,sortState,filterData}) {
  return (
    <div className="fucntions-container">
      <div className="search-container">
        <img src={SearchIcon}></img>
        <input
          type="text"
          placeholder="Search by order ID..."
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      <div className="sort-container">
        <button
          className="btn-container"
          onClick={() => {
            if(sortState<=2){
              setSortState(sortState + 1);
            }
            // setSortState(sortState + 1);
          }}
        >
          Sort{sortState}<img src={SortIcon}></img>
        </button>
        <button className="btn-container-1">
          <img
            src={DownloadIcon}
            onClick={() =>
              downloadPDF(filterData, [
                "orderId",
                "orderDate",
                "orderAmount",
                "transactionFees",
              ])
            }
            style={{ cursor: "pointer" }}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchSortDownload;
