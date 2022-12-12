import React from "react";
import "./Features.css";

const featurestext = [
  {
    para: "Checkout App Features",
    heading: "The Only App You’ll Need",
  },
];

const features = [
  {
    image: "../Theme/Group 48.png",
  },
  {
    image: "../Theme/Group 49.png",
  },
  {
    image: "../Theme/Group 51.png",
  },
  {
    image: "../Theme/Group 52.png",
  },
  {
    image: "../Theme/Group 53.png",
  },
];

const Features = () => {
  return (
    <div className="Features">
      <div className="container">
        <div className="col-xs-12">
          {featurestext.map((elem) => {
            return (
              <>
                <p>{elem.para}</p>
                <h2>{elem.heading}</h2>
              </>
            );
          })}
        </div>
        <div style={{display :"flex",flexDirection:"row",flexWrap:"wrap"}}>
          {features.map((features) => {
            return (
              <>
                <div className="QR ">
                  <img className="Group48" src={features.image} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
