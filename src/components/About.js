import React from "react";
import "./About.css";
import "./General.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Clintslider from "./Clintslider";
// import Slidersec from "./Slidersec";
import "./Blog.css";
import Numslider from "./Numslider";

function About() {
  return (
    <>
      {/* ============================================ About  Header Started================================-=== */}
      <div
        className=" container d-flex justify-content-center img-fluid align-items-center mt-5 mb-5 col-md-8 col-sm-8 "
        style={{
          backgroundImage: `url('./images/About Us (2).png')`,

          backgroundSize: "cover",
          background: "cover",
          backgroundPosition: "center",
          Height: "305px",
          width: "530px",
          padding: "12px",
        }}
      >
        <div className="text-center">
          <div className="container mt-2">
            <h1 className="fw-bolder">About Us</h1>
          </div>
        </div>
      </div>
      {/* ===============================================Main Section Started=================================== */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="card border-0">
              <div className="card-body ">
                <h2 className="card-title fw-bold mt-4">Software Alliance</h2>
                <p
                  className="mt-3 overflow-hidden"
                  style={{ maxHeight: "270px" }}
                >
                  Software Alliance is a software development company with over
                  10 years of experience in the industry. Our global presence
                  speak for our authenticity and value in the IT space. We
                  provide cutting edge IT services to clients all over the
                  world. We have dedicated web and app developers teams in
                  Denmark, UK, UAE and Pakistan who are working to provide the
                  best service ensuring tailor made smart solutions and results
                  for you. Software Alliance ensures Agility, Flexibility and
                  Operational Efficiency through collaboration of business and
                  IT solutions
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7 ">
            <div className="card border-0">
              <div className="card-body">
                <img
                  className="img-fluid custom-box-shadow"
                  src="./images/abt1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================main section ended====================================== */}
      <Numslider />

      {/* ======================================= images in a row ended================================= */}

      <div className="container mt-5">
        {/* <Slidersec /> */}
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <img src="./images/Frame 4.png" class="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      {/* ==================================== horizontal single image ended================================ */}
      <Clintslider />

      {/* =============================main picture ended=================================================== */}
      <div className="container mt-5">
        <div className="card text-center">
          <div
            className="card-body"
            style={{
              backgroundImage: `url('./images/Frame 267.png')`,
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
            <br />
            <Link
              to="/Hdev"
              className="btn  "
              style={{
                marginTop: 15,
                marginBottom: 10,
              }}
              id="idt"
            >
              Hire developers
            </Link>
          </div>
        </div>
      </div>
      {/* =======================================footer will be there================================================= */}
      <Footer />
    </>
  );
}

export default About;
