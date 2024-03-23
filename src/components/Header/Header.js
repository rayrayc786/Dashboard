import React from "react";
import "./Header.scss";
import HelpIcon from "../../assets/icons/Help.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import MessageIcon from "../../assets/icons/Message.svg";
import DownArrow from "../../assets/icons/DownArrow.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  let title;

  switch (location.pathname) {
    case "/":
      title = "Home";
      break;
    case "/home":
        title = "Home";
        break;
    case "/order":
      title = "Order";
      break;
    case "/delivery":
      title = "Delivery";
      break;
    case "/marketing":
      title = "Marketing";
      break;
    case "/analytic":
      title = "Analytic";
      break;
    case "/payment":
      title = "Payment";
      break;
    case "/tool":
      title = "Tool";
      break;
    case "/discount":
      title = "Discount";
      break;
    case "/audience":
      title = "Audience";
      break;
    case "/appearance":
      title = "Appearance";
      break;
    case "/plugin":
      title = "Plugin";
      break;
    default:
      title = "";
  }

  return (
    <div className="header-container">
      <div className="header-left">
        <span>{title}</span>
        <div className="how-it-works">
          <img src={HelpIcon} className="help-icon" />
          <span>How it works</span>
        </div>
      </div>
      <div className="header-middle">
        <img src={SearchIcon}></img>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          disabled
        />
      </div>
      <div className="header-right">
        <div className="icons">
          <div className="icon-container">
            <img src={MessageIcon}></img>
          </div>
          <div className="icon-container">
            <img src={DownArrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
