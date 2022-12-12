import React from "react";
import "./Navbar.css";
import logo from "../Theme/logo 2.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="main-div">
    <div className="container ">
    <div className="col-xs-12 no-padding">
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
      <a className="navbar-brand" href="#dd">
      <div className="logo_img">
      <img className="logo" src={logo} alt="404" />
      </div>
    </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#dd">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ss">
               Customer
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ss">
              Merchant
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ss">
                Developer Refrence
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ss">
              Support
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ss">
             Contact
              </a>
            </li>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
