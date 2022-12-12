import React from "react";
import "./GoCashless.css";

const imgtext = [
  {
    Image: "../Theme/Page3_Cashless/cta-1-shape-2 1.png",
    heading: "Help your business go cashless ",
    para: "Cash and card payments are no longer a complete solution for your customers. Join the UPI revolution and grow your sales by going cashless. BC-Fintech also offers exclusive value added services to all its merchant partners. You can list your store, add details and offers to your store listing, enable the BC-Fintech ATM and increase customer walk-ins with the BC-Fintech for Business app.",
  },
  {
    Image: "../Theme/Page3_Cashless/Ellipse 5.png",
  },
];
const imgtext2 = [
  {
    Image: "../Theme/Page3_Cashless/marchent 1.png",
  },
  {
    Image: "../Theme/Page3_Cashless/cta-1-shape-1.png",
  },
  {
    Image: "../Theme/Page3_Cashless/Ellipse 7.png",
  },
];

const GoCashless = () => {
  return (
    <section className="GoCashless">
      <div className="row container mx-auto">
        <div className="go-cashless col-sm-6 col-md-6 col-12 w-50 pt-5 mt-5 ">
          {imgtext.map((elem, index) => {
            return (
              <>
                <img
                  className={"Banner-cashless" + index}
                  src={elem.Image}
                  alt=""
                ></img>
                <h1>{elem.heading}</h1>
                <p>{elem.para}</p>
              </>
            );
          })}
          <div className="btn-android-cashless">
            <button>Accept Payments At Store</button>
          </div>
        </div>
        <div className="images-banner-cashless col-sm-6 col-md-6 col-12 no-padding mt-5 pt-5">
        {imgtext2.map((elem,index) => {
          return(
            <>
            <img className={"img-Banner-cashless" + index} src={elem.Image} alt=""></img>
            </>
          )
        })}
          
        </div>
      </div>
    </section>
  );
};

export default GoCashless;
