import React from "react";
import "./PaymentSolution.css";
import Nav from "../Component/Nav"

const Payment = [
  {
    id:1,
    image: "../Theme/banner-shapes-1-1 1.png",
    para: "Welcome BC-Fintech",
    heading: "The Smart Way for Online Payment Solution",
    content: "Payment solutions built to workfor your business.",
  },
  {
    id:2,
    image: "../Theme/banner-shapes-1-4 1.png",
  },
  {
    id:3,
    image: "../Theme/banner-shapes-1-5 1.png",
  },
];
const imagepart = [
  {
    id:4,
    image: "../Theme/banner-moc-1-12 1 (1).png",
  },
  {
    id:5,
    image: "../Theme/banner-shapes-1-3 1.png",
  },
  {
    id:6,
    image: "../Theme/banner-shapes-1-7 1.png",
  },
];

const PaymentSolution = () => {
  return (
    <>
      <section className="Page_1">
        {/*Navbar imported here  */}
        <Nav />
        <div className="row container mx-auto">
          <div className="text col-sm-6 col-md-6 col-12 pt-5 mt-5 ">
            {Payment.map((Payment, index) => {
              return (
                <>
                   
                  <img
                  key={Payment.id}
                    className={"Banner_start" + index } 
                    src={Payment.image}
                    alt=""
                  ></img>
                  <p>{Payment.para}</p>
                  <h1>{Payment.heading}</h1>
                  <p>{Payment.content}</p>
                </>
              );
            })}
            <div className="btn_android">
              <button>Get Started</button>
            </div>
          </div>
          <div className="images_banner col-sm-6 col-md-6 col-12 no-padding mt-5 pt-5">
            {imagepart.map((elem, index) => {
              return (
                <> 
                  <img 
                  key={elem.id}
                    className={"img_Banner" + index} 
                    src={elem.image}
                    alt=""
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSolution;
