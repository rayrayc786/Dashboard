import React from "react";
import DownArrowBlack from "../../../../assets/icons/DownArrowBlack.svg";
import OutlineIcon from "../../../../assets/icons/Outline.svg";
import "./Table.scss";
function Table({ records, sortState }) {
  return (
    <div className="table-container">
      <div className="table-header">
        <table>
          <thead>
            <tr>
              <td>OrderID</td>
              <td>
                Order date <img src={DownArrowBlack}></img>
              </td>
              <td>Order amount</td>
              <td>
                Transaction fees
                <img
                  src={OutlineIcon}
                  style={{ verticalAlign: "textbottom" }}
                ></img>{" "}
              </td>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a>{item.orderId}</a>
                  </td>
                  <td>
                    {sortState == 0
                      ? item.orderDate.toString()
                      : item.orderDate}
                  </td>
                  <td>{item.orderAmount}</td>
                  <td>{item.transactionFees}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
