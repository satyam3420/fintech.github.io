import React from "react";
import "./EWallet.css";
import Data from "../Component/Ewallet.json";

const E_Wallet = () => {
  const imageData = [
    {
      image: "../Theme/E_Wallet/banner-moc-1-12 4.png",
      alt: "imageout",
    },
    {
      //image: "../Theme/E_Wallet/banner-moc-1-13 2.png",
      alt: "imagein",
    },
  ];
  return (
    <>
      <div className="E_Wallet">
        <div className="row container mx-auto">
          <div className="E_Wallet_left-img col-sm-6 col-md-6 col-12 w-50">
          <h1>Benefits Using E-Wallet Paylite for You</h1>
          {Data.map((elem) => {
              return (
                <>               
                  <div key={elem.id} className="img1_number" >                   
                      <img className="round1"  src={elem.image} alt="" />
                      <h2>{elem.num}</h2>                 
                    <div className="text_sizes">
                      <h3>{elem.title}</h3>
                      <p>{elem.content}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-sm-6 col-md-6 col-12 w-50 pt-5 mt-5 ">
            <div className="download_right-img">
              {imageData.map((elem, index) => {
                return (
                  <>
                 
                    <img 
                      className={"phone_1" + index}
                      src={elem.image}
                      alt={elem.alt}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default E_Wallet;
