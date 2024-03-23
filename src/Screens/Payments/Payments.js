import React, { useEffect, useState } from "react";
import JsonData from "../../Constants/Data.json";
import "./Payments.scss";
import Pagination from "./components/Pagination/Pagination";
import { SelectFilter } from "../../Constants/Constants";
import Table from "./components/Table/Table";
import Overview from "./components/Overview/Overview";
import SearchSortDownload from "./components/SearchSortDownload/SearchSortDownload";
function Payments() {
  const [filterData, setFilterData] = useState(JsonData);
  const [searchData, setSearchData] = useState("");
  const [sortState, setSortState] = useState(0);
  const [selectedSortingOption, setSelectedSortingOption] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const maxPagesToShow = 5; // Change this value to adjust the maximum number of pages to display

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filterData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(filterData.length / recordsPerPage);

  useEffect(() => {
    const filteredData = JsonData.filter((data) => {
      const orderId = data.orderId?.replace("#", "");
      return orderId.startsWith(searchData);
    });

    const sortedData = filteredData
      .map((item) => ({
        ...item,
        orderDate: new Date(item.orderDate).toDateString(),
      }))
      .sort((a, b) => {
        if (sortState === 1) {
          return new Date(a.orderDate) - new Date(b.orderDate);
        } else if (sortState === 2) {
          return new Date(b.orderDate) - new Date(a.orderDate);
        }
        return JsonData;
      });
    const filteredDataByOption = () => {
      const d = new Date();
      const todayDate = new Date().toDateString();
      const yesterday = new Date(d - 86400000).toDateString();

      switch (selectedSortingOption) {
        case "Today":
          return sortedData.filter(
            (item) => new Date(item.orderDate).toDateString() === todayDate
          );
        case "Yesterday":
          return sortedData.filter(
            (item) => new Date(item.orderDate).toDateString() === yesterday
          );
        case "This Week":
          const firstDaythisWeek = new Date(
            d.setDate(d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1))
          );
          const lastDaythisWeek = new Date(d.setDate(d.getDate() + 6));
          return sortedData.filter((item) => {
            const orderDate = new Date(item.orderDate);
            return (
              orderDate >= firstDaythisWeek && orderDate <= lastDaythisWeek
            );
          });
        case "This Month":
          const firstDayMonth = new Date(d.getFullYear(), d.getMonth(), 1);
          const lastDayofMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
          return sortedData.filter((item) => {
            const orderDate = new Date(item.orderDate);
            return orderDate >= firstDayMonth && orderDate <= lastDayofMonth;
          });
        case "This Year":
          const firstDaythisYear = new Date(d.getFullYear(), 0, 1);
          const lastDaythisYear = new Date(d.getFullYear(), 11, 31);
          return sortedData.filter((item) => {
            const orderDate = new Date(item.orderDate);
            return (
              orderDate >= firstDaythisYear && orderDate <= lastDaythisYear
            );
          });
        case "Last Year":
          const firstDaylastYear = new Date(d.getFullYear() - 1, 0, 1);
          const lastDaylastYear = new Date(d.getFullYear() - 1, 11, 31);
          return sortedData.filter((item) => {
            const orderDate = new Date(item.orderDate);
            return (
              orderDate >= firstDaylastYear && orderDate <= lastDaylastYear
            );
          });
        default:
          return sortedData;
      }
    };
    const filteredDataNew = filteredDataByOption();
    setFilterData(filteredDataNew);
    setCurrentPage(1);
  }, [searchData, sortState, selectedSortingOption]);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleSortingOptionChange = (event) => {
    setSelectedSortingOption(event.target.value);
  };

  return (
    <div className="container-payment">
      <Overview
        selectedSortingOption={selectedSortingOption}
        handleSortingOptionChange={handleSortingOptionChange}
        SelectFilter={SelectFilter}
      />
      <div className="container2">
        <div className="transaction-container">
          <span>Transaction | This Month</span>
        </div>
        <div className="outer-container">
          <SearchSortDownload
            setSearchData={setSearchData}
            setSortState={setSortState}
            sortState={sortState}
            filterData={filterData}
          />
          <Table records={records} sortState={sortState} />
          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
            npages={npages}
            maxPagesToShow={maxPagesToShow}
            changeCPage={changeCPage}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default Payments;
