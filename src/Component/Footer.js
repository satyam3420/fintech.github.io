import React from "react";
import "./Footer.css";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const footerdata1 = [
  {
    image: "../Theme/logo 2.png",
    para: "  We make money only when you do. The charges you see are what you pay with no hidden charges!",
    location1: " 123 Street, Old Trafford, NewYork, USA",
    phone: "+91 8456985741",
    info: "info@bcfintech.com",
    heading: "© 2022, All rights reserved",
  },
];
const footerdata2 = [
  {
    heading: "Useful Links",
    para1: "Customer ",
    para2: "Merchant ",
    para3: "Developer Refrence ",
    para4: "Support ",
  },
];
const footerdata3 = [
  {
    heading: "About",
    para1: "Help ",
    para2: "Contact ",
    para3: "Private Policy ",
    para4: "Terms&Condition",
  },
];
const footerdata4 = [
  {
    image: "../Theme/Download_PageImg/apple-play.png",
  },
  {
    image: "../Theme/Download_PageImg/google-play.png",
  },
];

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row container ">
        <div className="col-sm-3 col-xs-12">
          <div className="part1">
            {footerdata1.map((elem, index) => {
              return (
                <>
                  <img src={elem.image} alt="" />
                  <p>{elem.para}</p>
                  <p>
                    <GoLocation className="location" />
                    {elem.location1}
                    <p>
                      <FiPhoneCall className="location" />
                      {elem.phone}
                    </p>
                    <p>
                      <AiOutlineMail className="location" />
                      {elem.info}
                      <h6>{elem.heading}</h6>
                    </p>
                  </p>
                </>
              );
            })}
          </div>
        </div>

        <div className="col-sm-3 col-xs-12">
          <div className="part1">
            {footerdata2.map((elem) => {
              return (
                <>
                  <h3>{elem.heading}</h3>
                  <p>{elem.para1}</p>
                  <p>{elem.para2}</p>
                  <p>{elem.para3}</p>
                  <p>{elem.para4}</p>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-sm-3 col-xs-12">
          <div className="part1">
            {footerdata3.map((elem) => {
              return (
                <>
                  <h3>{elem.heading}</h3>
                  <p>{elem.para1}</p>
                  <p>{elem.para2}</p>
                  <p>{elem.para3}</p>
                  <p>{elem.para4}</p>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-sm-3 col-xs-12">
          <div className="part1">
            <h3>Support</h3>

            <input type="text" placeholder="Email Address" />
            <button className="btn_footer">SUBSCRIBE</button>
            {footerdata4.map((elem, index) => {
              return (
                <>
                  <div className="store_btn">
                    <img className={"apple" + index} src={elem.image} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
