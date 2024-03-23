import React from 'react'
import DownArrowBlack from "../../../../assets/icons/DownArrowBlack.svg";
import './Overview.scss'
import { dashboardData } from '../../../../Constants/Constants';
function Overview({selectedSortingOption,handleSortingOptionChange,SelectFilter}) {
  return (
    <div className="container1">
        <div className="overview-container">
          <div className="overview-inner-container">
            <span>Overview</span>
            <select
              value={selectedSortingOption}
              onChange={handleSortingOptionChange}
            >
              {SelectFilter.map((item, index) =>{
                return <option key={index} value={item.value}>{item.label}</option>
              })}
              <img src={DownArrowBlack}></img>
            </select>
          </div>
          <div className="online-outer-container">
            <div className="online-inner-container">
              <span className="span-1">Online Orders</span>
              <span className="span-2">{dashboardData.orders}</span>
            </div>
            <div className="online-inner-container">
              <span className="span-1">Amount received</span>
              <span className="span-2">₹{dashboardData.amount}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Overview