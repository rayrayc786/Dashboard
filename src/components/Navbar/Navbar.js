import React from "react";
import "./Navbar.scss";
import Home from "../../assets/icons/Home.svg";
import Order from "../../assets/icons/Order.svg";
import Analytic from "../../assets/icons/Analytic.svg";
import Delivery from "../../assets/icons/Delivery.svg";
import Marketing from "../../assets/icons/Marketing.svg";
import Payment from "../../assets/icons/Payment.svg";
import Tool from "../../assets/icons/Tool.svg";
import Discount from "../../assets/icons/Discount.svg";
import Audience from "../../assets/icons/Audience.svg";
import Appearance from "../../assets/icons/Appearance.svg";
import Plugin from "../../assets/icons/Plugin.svg";
import dp from "../../assets/icons/dp.svg";
import Wallet from "../../assets/icons/Wallet.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div style={{ marginBottom: "2rem" }}>
        <div className="nav-top">
          <img src={dp} className="display-img" />
          <div className="nav-text">
            <span>Nishyan</span>
            <span>Visit store</span>
          </div>
          <span>
            <svg
              style={{ width: "20px", height: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </span>
        </div>
        <div className="nav-pages">
          <Link to={"/"}>
            <img src={Home} className="icons" />
            Home
          </Link>
          <Link to={"/order"}>
            <img src={Order} className="icons" />
            Orders
          </Link>
          <Link to={"/delivery"}>
            <img src={Delivery} className="icons" />
            Delivery
          </Link>
          <Link to={"/marketing"}>
            <img src={Marketing} className="icons" />
            Marketing
          </Link>
          <Link to={"/analytic"}>
            <img src={Analytic} className="icons" />
            Analytics
          </Link>
          <Link to={"/payment"}>
            <img src={Payment} className="icons" />
            Payment
          </Link>
          <Link to={"/tool"}>
            <img src={Tool} className="icons" />
            Tool
          </Link>
          <Link to={"/discount"}>
            <img src={Discount} className="icons" />
            Discount
          </Link>
          <Link to={"/audience"}>
            <img src={Audience} className="icons" />
            Audience
          </Link>
          <Link to={"/appearance"}>
            <img src={Appearance} className="icons" />
            Appearance
          </Link>
          <Link to={"/plugin"}>
            <img src={Plugin} className="icons" />
            Plugin
          </Link>
        </div>
        <div className="nav-bottom">
            <div className="bottom-container">
              <div className="img-outer">
                <img src={Wallet} style={{width:'24px',height:'24px'}}></img>
              </div>
              <div className="text-container">
                <span>
                  Available credits
                </span>
                <span className="span">
                  222.10
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
