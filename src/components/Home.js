import React, { useState } from "react";

import "./Home.css";
import "./General.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Clintslider from "./Clintslider";
import Footer from "./Footer";
import Skilledse from "./Skilledse";

const data = [
  {
    src: "./images/Asset 1@300x 1.png",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    src: "./images/Asset 1@300x 1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "./images/Asset 1@300x 1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "./images/Rectangle.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "./images/Rect.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "./images/Asset 1@300x 2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const datapic = [
  { src: "./images/Group 10.png" },
  { src: "./images/Group 11.png" },
  { src: "./images/Group 12.png" },
  { src: "./images/Group 13.png" },
];
const data1 = [
  {
    src: "./images/sack-dollar-solid 1.png",
    title: "Dedicated Hiring",
    desc: "Build your own team by selecting, hiring, and managing highly skilled Our project-based model, usually at a fixed price, is specifically designed to provide you with the best-in-class software development experts. This model is intended to ensure a swift and reliable collaboration between a client and our IT specialists engaged in a specific project.",
    buttonText: "Contact with expert",
  },
  {
    src: "./images/sack-dollar-solid 1.png",
    title: "Dedicated Hiring",
    desc: "Build your own team by selecting, hiring, and managing highly skilled Our project-based model, usually at a fixed price, is specifically designed to provide you with the best-in-class software development experts. This model is intended to ensure a swift and reliable collaboration between a client and our IT specialists engaged in a specific project.",
    buttonText: "Hire developers",
  },
];
// const data2 = [
//   {
//     src: "./images/Group 232.png",
//     cardName: "James kale",
//     role: "Game developer",
//     desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
//     bt1: "Java",
//     bt2: "Rubby",
//     bt3: "C++",
//   },
//   {
//     src: "./images/Group 232 (1).png",
//     cardName: "Musa khan",
//     role: "UI/UX",
//     desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
//     bt1: "Adobe",
//     bt2: "Canva",
//     bt3: "Figma",
//   },
//   {
//     src: "./images/Group 232.png",
//     cardName: "Rafi Qazii",
//     role: "Full Stack developer",
//     desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
//     bt1: "php",
//     bt2: "React",
//     bt3: "SQl",
//   },
// ];

const data3 = [
  {
    src: "./images/group 260.png",
    title: "Time-to-contract 1 week",
    desc: "With Software Alliance, there's no need to slow down for recruitment.",
  },
  {
    src: "./images/group 258.png",
    title: "Flexible, efficient scaling",
    desc: "Expand or reduce your remote team size on demand.",
  },
  {
    src: "./images/group 259.png",
    title: "10,000+ software engineers",
    desc: "Get access to vetted experts in web, mobile, Big Data, ML, IoT and more.",
  },
  {
    src: "./images/group 259.png",
    title: "Dedicated support",
    desc: " Get a personal Customer Success Specialist on one call or message.",
  },
  {
    src: "./images/group 262.png",
    title: "Vetted talent",
    desc: "Save your time and focus by only reviewing the best candidates. ",
  },
  {
    src: "./images/group 261.png",
    title: " Long-term predictability",
    desc: "Software Alliance engineers work with customers for 2 years on average. ",
  },
];

// ////////////////////////////////////////// To Hide title
const Home = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div
        className="container"
        style={{ display: isHidden ? "none" : "block" }}
      >
        <div
          className="card mt-5"
          style={{
            border: "none",
            background:
              "linear-gradient(90deg, rgb(134, 84, 192) 26%, rgb(187, 86, 179) 78%, rgb(168, 80, 161) 98%, rgb(185, 88, 177) 100%)",
          }}
        >
          <div className="card-body d-flex justify-content-between align-items-start ">
            <p
              className="card-title "
              style={{ padding: "20px", color: "white" }}
            >
              Software Alliance waives the service fee for customers that
              contract talent from Pakistan.
              <br /> We're also donating 50% of our net profit monthly to the
              support of Pakistan. <br />
              <div className="mt-4 text-black">
                Read more <img src="./images/Group 2361.png" alt="react" />
              </div>
            </p>
            <img
              onClick={toggleVisibility}
              className="mt-3"
              src="./images/Vector cross.png"
              alt="react"
              style={{
                alignSelf: "flex-start",
                width: "14px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      {/* ======================================= Header Jubotron completed=========================================== */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-danger">
                  Step : 1 Talk to us
                </h5>
                <h1 className="card-text fw-bold">
                  Instantlly add <br />
                  <span className="text-danger">4 Java</span> <br /> developers
                  to <br /> your team.
                </h1>
                <p>
                  Software Alliance helps tech companies extend their
                  engineering
                  <br /> teams by leveraging a network of 25,000+ <br />
                  vetted contractors from hundreds of development agencies
                  <br /> across the world.
                </p>
                <Link to="/Hdev" className="btn btn-danger mt-4">
                  Hire Developers
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <img
                  className="img-fluid"
                  src="./images/group.png"
                  alt="react"
                  style={{ height: "350px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================== Talk to us section Completed==================================== */}
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row ">
          {data.map((item, ind) => {
            return (
              <div className="col-sm-4 zoom-on-hover" key={ind}>
                <div className="card   shadow-lg  text-center mb-3">
                  <div className="card-body">
                    <img
                      src={item.src}
                      style={{ width: "57%" }}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <p className="card-text mt-2">{item.desc}</p>
                    <img
                      style={{ cursor: "pointer" }}
                      src="./images/Group 249.png"
                      className="mini-pic"
                      alt="rect"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =======================================Block of six cards ended ============================================ */}
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          {data1.map((item, ind) => {
            return (
              <div className="col-md-6 col-sm-6" key={ind}>
                <div className="card text-center bg-danger">
                  <div className="card-body">
                    <img
                      src={item.src}
                      style={{
                        backgroundColor: "white",
                        padding: "3%",
                        borderRadius: "50%",
                        width: "15%",
                      }}
                      className=" mt-2"
                      alt=""
                    />
                    <h5 className="card-title text-white  mt-2">
                      {item.title}
                    </h5>
                    <p className="card-text text-white mt-4">{item.desc}</p>
                    <Link to="/login" className="btn btn-light mt-2">
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ========================================Delicate and Fixed Cost Completed================================== */}
      <div className="container mb-4 mt-4">
        <h2 className="fw-bold text-center"> Top rated by tech leaders</h2>
        <div className="row">
          {datapic.map((item, ind) => {
            return (
              <div className=" col-md-3 col-sm-3">
                <div className="card border-0 zoom-on-hover">
                  <div className="card-body">
                    <img className="img-fluid" src={item.src} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* =======================================Top rated tech leaders completed==================================== */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url('./images/Frame 265.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <div className="container border-0">
          <Skilledse />
        </div>
        <div className="container card align-items-center border-0 bg-transparent">
          <button
            className="btn btn-light col-md-1 col-sm-2 mb-5 mt-5 border-0"
            id="idt"
          >
            View all
          </button>
        </div>
      </div>
      {/* ======================================= Skilled Software Engineers Completed=============================== */}
      <div className="container ">
        <div className="text-center">
          <h1 className="fw-bold mt-4">How SA Works</h1>
        </div>
        <div className="part-one" style={{ marginTop: "70px" }}>
          <div className="row">
            <div className="card col-md-7 col-ms-12 border-0">
              <div className="card-body">
                <h5 className="card-title text-danger">Step 1: Talk to us</h5>
                <h1 className="card-title fw-bolder">
                  Launch the <br /> personalized <br /> matching process
                </h1>
                <p className="card-text">
                  Set up a free intro call with our Team Advisor your personal
                  contact <br />
                  at Software Alliance. They'll ensure the talent we source
                  perfectly matches <br />
                  your needs.
                </p>
                <Link to="/Hdev" className="btn btn-danger">
                  Hire Developers
                </Link>
              </div>
            </div>
            <img
              src="./images/saframe.png"
              className="img-fluid col-md-5 col-sm-12"
              alt=".."
              style={{ height: 270 }}
            />
          </div>
        </div>
        <div className="part-two" style={{ marginTop: "70px" }}>
          <div className="row">
            <img
              src="./images/Layer 1.png"
              className="img-fluid col-md-5 col-sm-12 mt-2"
              alt="..."
              style={{ height: 270 }}
            />
            <div className="col-md-7 col-sm-12 ">
              <div className="card border-0 text-end">
                <div className="card-body ">
                  <h5 className="card-title text-danger">
                    Step 2: Access the candidates
                  </h5>
                  <h1 className="card-title fw-bolder">
                    Get matching <br /> talent in just 48
                    <br />
                    hours{" "}
                  </h1>
                  <p className="card-text">
                    Software Alliance handpicks the best-matched candidates from
                    its poo
                    <br />
                    of over 10,000 engineers, conducts personalized
                    pre-screening, then arranges <br />
                    interviews for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part-three" style={{ marginTop: "70px" }}>
          <div className="row">
            <div className="card border-0 col-md-7 col-sm-12">
              <div className="card-body">
                <h5 className="card-title text-danger">
                  Step 3: Begin work ASAP
                </h5>
                <h1 className="card-title fw-bolder">
                  Get work started <br /> with confidence
                </h1>
                <p className="card-text">
                  Software Alliance automates contract signing and invoicing for
                  you <br />
                  and the development companies, employers of your selected
                  engineers. No <br />
                  commitments before this point.
                </p>
                <Link to="/Hdev" className="btn btn-danger">
                  Hire Developers
                </Link>
              </div>
            </div>
            <img
              src="./images/Asset 1 1.png"
              className="img-fluid col-md-5 col-sm-12"
              alt="..."
              style={{ height: 270 }}
            />
          </div>
        </div>
      </div>
      {/*=====================================How SA works Ended ==================================================== */}
      <div className="container">
        <h1 className="text-center fw-bold"> Our Benefits</h1>
      </div>
      <div
        className="container-fluid mt-5"
        style={{
          backgroundImage: `url('./images/Frame 265.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <br />
        <div className="container mt-5 ">
          <div className="row ">
            {data3.map((item, ind) => {
              return (
                <div className="col-sm-4 mt-4" key={ind}>
                  <div className="card text-center zoom-on-hover">
                    <div className="card-body ">
                      <img
                        src={item.src}
                        className="benefits"
                        alt="some icons"
                      />
                      <h6 className="mt-4 fw-bold">{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <br />
      </div>
      {/* ======================================= Benefits Copleted ================================================= */}

      <Clintslider />
      <div className="container mt-5">
        <div className="card text-center">
          <div
            className="card-body"
            style={{
              backgroundImage: `url('./images/Rectangle 149.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              borderRadius: "5px",
            }}
          >
            <h5
              className="card-title"
              style={{ marginTop: 15, color: "white" }}
            >
              {" "}
              Tell us about your plans on a brief intro call and we’ll start the
              matching process.
            </h5>
            <Link
              to="/Hdev"
              id="idt"
              className="btn border-0 mt-5"
              style={{
                marginTop: 15,
                marginBottom: 30,
              }}
            >
              Hire developers
            </Link>
          </div>
        </div>
      </div>

      {/* ===========================================Footer Started================================================ */}
      <Footer />
    </>
  );
};

export default Home;
