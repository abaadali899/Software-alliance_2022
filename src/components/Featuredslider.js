import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image: "./images/Rectangle 152.png",
    category: "Outsourcing",
    date: "February 09, 2021 10:32 AM",
    title:
      "Guidelines on How to Hire an Off-shores Development Team in Pakistan",
    description:
      "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
  {
    image: "./images/3in3.jpeg",
    category: "Insourcing",
    date: "March 15, 2024 11:44 PM",
    title:
      " biiiiihiknnkldsbon How to Hire an  fdfefrevfdvdv pment Team in Pakistan",
    description:
      "As your tech start fdvg kkdsfhkdb biiiiihiknnkldsbc shfhihfihteam of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
  // Add more objects with similar structure for additional posts
];

function Featuredslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h5 className="fw-bold" style={{ marginLeft: 15, marginTop: 60 }}>
            Featured posts
          </h5>
        </div>
        <div className="col-6 text-end arrow-icons2">
          <img
            src="./images/arrow1.png"
            alt="Arrow 1"
            onClick={() => handleArrowClick("prev")}
          />
          <img
            src="./images/arrow2.png"
            alt="Arrow 2"
            onClick={() => handleArrowClick("next")}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <img
                className="img-fluid"
                alt="first-crd"
                src={data[currentIndex].image}
                style={{ width: "120%", height: "300px", borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body" style={{ marginTop: "36px " }}>
              <div className="crd-lr">
                <h6 className="card-title mb-0 text-danger left-element pink-line">
                  {data[currentIndex].category}
                </h6>
                <p className="right-element justify-content-end">
                  {data[currentIndex].date}
                </p>
              </div>
              <h5 className="fw-bold" style={{ marginTop: 5 }}>
                {data[currentIndex].title}
              </h5>
              <p className="card-text ">{data[currentIndex].description}</p>
              <Link className=" text-danger" style={{ textDecoration: "none" }}>
                Read more <img alt="little-arrow" src="./images/arrow3.png" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredslider;
