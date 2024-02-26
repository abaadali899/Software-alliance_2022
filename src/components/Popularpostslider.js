import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const data = [
  {
    src: "./images/3in3.jpeg",
    dt: "January 01, 2021 11:30 AM",
    heading:
      "Guidelines on How to Hire an Offshore Development Team in Pakistan",
  },
  {
    src: "./images/3in2.jpeg",
    dt: "February 15, 2022 10:00 PM",
    heading: "Tips for Recruiting an Offshore Development Team in Pakistan",
  },
  {
    src: "./images/3in3.jpeg",
    dt: "March 02, 2021 09:32 AM",
    heading: "Insights for Building Your Offshore Team in Pakistan",
  },
  // Dummy data
  {
    src: "./images/Rectangle 182.png",
    dt: "April 11, 2022 11:45 AM",
    heading: "Advice for Selecting an Offshore Development Team in Pakistan",
  },
  {
    src: "./images/Rectangle 172.png",
    dt: "May 11, 2021 02:15 PM",
    heading: "Key Considerations for Hiring Offshore Talent from Pakistan",
  },
  {
    src: "./images/Rectangle 154.png",
    dt: "February 12, 2021 03:30 PM",
    heading: "Steps to Forming an Offshore Development Team in Pakistan",
  },
];

function Popularpostslider() {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickPrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h5 className="fw-bold" style={{ marginLeft: 15, marginTop: 60 }}>
            Popular Posts
          </h5>
        </div>
        <div className="col-6 text-end arrow-icons2">
          <img
            src="./images/arrow1.png"
            alt="Arrow 1"
            onClick={handleClickPrev}
          />
          <img
            src="./images/arrow2.png"
            alt="Arrow 2"
            onClick={handleClickNext}
          />
        </div>
      </div>
      <div className="row">
        {[0, 1, 2].map((index) => {
          const dataIndex = (startIndex + index) % data.length;
          const item = data[dataIndex];
          return (
            <div className="col-sm-4" key={index}>
              <div
                className="card"
                style={{ border: "none", borderRadius: "15px" }}
              >
                <div className="card-body">
                  <img
                    className="img-fluid"
                    alt="react"
                    src={item.src}
                    style={{
                      width: "150%",
                      borderRadius: "5px",
                      height: "200px",
                    }}
                  />
                  <div className="crd-lr" style={{ marginTop: 10 }}>
                    <h6 className="card-title mb-0 text-danger left-element pink-line">
                      Outsourcing
                    </h6>
                    <p className="right-element">{item.dt}</p>
                  </div>
                  <h5 className="fw-bold">{item.heading}</h5>
                  <Link
                    className="text-danger"
                    style={{ textDecoration: "none" }}
                  >
                    Read more <img alt="react" src="./images/arrow3.png" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
}

export default Popularpostslider;
