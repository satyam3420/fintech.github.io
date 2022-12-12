import React from "react";
import "./BuisnessGoals.css";

const buisness = [
  {
    image: "../Theme/Page4_Buisness/21044 1.png",
  },
];
const buisness1 = [
  {
    image: "../Theme/Page4_Buisness/Ellipse 9.png",
    heading: "Meet your business goals faster",
    para: " BC-Fintech can help you reach a wide user-base with targeted campaigns designed to meet your business needs. Let relevant consumers sample your products and services in the form of ‘reward coupons’ distributed on BC-Fintech, or advertise within the BC-Fintech app.",
  },
];
const BuisnessGoals= () => {
  return (
    <section className="BuisnessGoals">
      <div className="row container mx-auto">
      <div className="buisness_page col-sm-6 col-md-6 col-12 mt-5 pt-5">
          {buisness.map((elem) => {
            return (
              <div className="buisness">
              <img className="img1-left-buisness" src={elem.image} alt=""></img>
              </div>       
            );
          })}   
          </div>   
        <div className="text col-sm-6 col-md-6 col-12 pt-5 mt-5 ">
          <div className="buisness_right-images">
          {buisness1.map((elem) => {
            return (
              <>
                <img className="round_img1" src={elem.image} alt=""></img>
                <h1>{elem.heading}</h1>
                <p>{elem.para} </p>
              </>
            );
          })}
          <div className="btn_android-buisness">
            <button> Advertise on PhonePe </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BuisnessGoals;
