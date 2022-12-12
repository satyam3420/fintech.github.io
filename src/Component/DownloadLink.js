import React from "react";
import "./DownloadLink.css";

const download = [
  {
    heading: "Download Now For Your Phone",
    Image: "../Theme/Download_PageImg/google-play.png",
  },
  {
    Image: "../Theme/Download_PageImg/apple-play.png",
  },
  {
    Image: "../Theme/Download_PageImg/cta-1-shape-1.png",
  },
];
const download2 = [
  {
    Image: "../Theme/Download_PageImg/banner-moc-1-12 3.png",
  },
  {
    Image: "../Theme/Download_PageImg/banner-shapes-1-3 2.png",
  },
];

const DownloadLink = () => {
  return (
    <div className="download_main">
      <div className="row container mx-auto">
        <div className="download_left-img col-sm-6 col-md-6 col-12 ">
          {download.map((elem, index) => {
            return (
              <>
                <h1>{elem.heading}</h1>
                <div>
                  <img
                    className={"goole_play" + index}
                    src={elem.Image}
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="col-sm-6 col-md-6 col-12 w-50 pt-5 mt-5 ">
          <div className="download_right-img">
            {download2.map((elem, index) => {
              return (
                <img className={"phone" + index} src={elem.Image} alt="" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadLink;
