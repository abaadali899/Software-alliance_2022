import React, { useState } from "react";
import "./General.css";

function Clintslider() {
  const dummyData = [
    {
      id: 1,
      imageUrl: "./images/Group 267.png",
      title: "Oleksandr K.",
      subtitle: "Java Developer",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      imageUrl: "./images/Group 232 (11).png",
      title: "John Doe",
      subtitle: "Software Engineer",
      paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: 3,
      imageUrl: "./images/Group 267.png",
      title: "Jane Smith",
      subtitle: "Web Developer",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      imageUrl: "./images/Group 232 (11).png",
      title: "Alice Johnson",
      subtitle: "UI/UX Designer",
      paragraph:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftImageClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  const handleRightImageClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleEllipseClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="card border-0">
            <div className="card-body">
              <img
                className="iLeft"
                style={{ cursor: "pointer" }}
                src="./images/Group 224.png"
                alt=""
                onClick={handleLeftImageClick}
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card border-0">
            <div className="card-body">
              <div
                className="card text-center justify-content-center align-items-center"
                style={{
                  backgroundImage: 'url("./images/Rectangle 168.png")',
                  zIndex: 1,
                  position: "relative",
                  color: "white",
                  maxWidth: 700,
                  marginTop: 120,
                  borderRadius: "20px",
                }}
              >
                {/* <img
                  // src={dummyData[currentIndex].imageUrl}
                  alt=""
                  style={{
                    marginTop: "-70px",
                    maxWidth: 680,
                    zIndex: -1,
                    position: "absolute",
                  }}
                /> */}
                <div className="card-body">
                  <div className="container">
                    <div
                      className="col justify-content-between align-items-center"
                      style={{ marginTop: "-95px" }}
                    >
                      <img
                        className="slidpic img-fluid"
                        src={dummyData[currentIndex].imageUrl}
                        style={{ width: "160" }}
                        alt=""
                      />
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-between align-items-center">
                        <img
                          className="coma"
                          src="./images/coma 1.png"
                          alt=""
                          style={{ maxWidth: 100, marginLeft: -15 }}
                        />
                        <h2 className="card-title text-center justify-content-center">
                          {dummyData[currentIndex].title}
                        </h2>
                        <img
                          className="coma1"
                          src="./images/Group 1.png"
                          alt=""
                          style={{ maxWidth: 100, marginRight: 25 }}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-center justify-content-center">
                    {dummyData[currentIndex].subtitle}
                  </h6>
                  <p className="card-text text-white">
                    {dummyData[currentIndex].paragraph}
                  </p>
                  <div>
                    {dummyData.map((data, index) => (
                      <img
                        key={index}
                        style={{
                          borderRadius: "50%",
                          marginRight: "5px",
                          cursor: "pointer",
                          backgroundColor:
                            index === currentIndex ? "white" : "",
                        }}
                        src="./images/Ellipse 17.png"
                        alt=""
                        onClick={() => handleEllipseClick(index)}
                      />
                    ))}
                  </div>
                  <br />
                  <div className="col text-end">
                    <img className="coma" src="./images/coma 2.png" alt="pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card border-0 ">
            <div className="card-body">
              <img
                className="iRight"
                style={{ cursor: "pointer" }}
                src="./images/Group 225.png"
                alt=""
                onClick={handleRightImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clintslider;
