import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./General.css";
const Footer = () => {
  return (
    <>
      {/* ===========================================Footer Started=================================================== */}
      <div
        style={{
          backgroundImage: `url('./images/Background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "auto",
          minWidth: "98vw",
        }}
      >
        {/* Your content here */}

        <div className="container my-5">
          <div className="row">
            {/* Logo Column */}
            <div className="col-md-5 col-lg-5 col-xl-5 mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <br />
                <br />
                <img
                  className="custom-size-logo"
                  src="./images/Frame.png"
                  alt="Your Logo"
                />
              </h6>
              <p style={{ color: "white" }}>
                We are a software development company with over 10 years of
                experience in the industry. We have dedicated teams in Denmark,
                UK, UAE and Pakistan.
              </p>
              <p style={{ color: "white", marginTop: 40 }}>
                <i className="bi bi-geo-alt-fill" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  &nbsp; &nbsp;57-58 D Faisal Town Lahore, Pakistan
                </Link>
              </p>
              <p style={{ color: "white" }}>
                <i className="bi bi-telephone-fill" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  &nbsp; &nbsp;+1(347)746-6999
                </Link>
              </p>
              <p style={{ color: "white" }}>
                <i className="bi bi-envelope-fill" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  &nbsp; &nbsp;info@softwarealliance.i
                </Link>
              </p>
            </div>
            {/* Quick Links Column */}
            <div
              className="col-md-2 col-lg-2 col-xl-2 col-sm-3 mx-auto mt-3"
              style={{ textDecoration: "none", color: "white" }}
            >
              <br />
              <br />
              <br />
              <br />
              <h6 className="text-uppercase mb-4 font-weight-bold fw-bold ">
                Quick links
              </h6>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link
                  to=""
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link
                  to="./About"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link
                  to="./Services"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link
                  to="./Portfolio"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Portfolio
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </p>
            </div>
            {/* Services Column */}
            <div
              className="col-md-3 col-lg-3 col-xl-3 col-sm-6 mx-auto mt-3"
              style={{ color: "white" }}
            >
              <br />
              <br />
              <br />
              <br />
              <h6 className="text-uppercase mb-4 font-weight-bold fw-bold">
                Services
              </h6>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  {" "}
                  Block Chain development
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Software development
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Web design and development
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  DevOps
                </Link>
              </p>
            </div>
            {/* About Us Column */}
            <div
              className="col-md-2 col-lg-2 col-xl-2 col-sm-3 mx-auto mt-3  "
              style={{ color: "white" }}
            >
              <br />
              <br />
              <br />
              <br />
              <h6 className="text-uppercase mb-4 font-weight-bold fw-bold ">
                About Us
              </h6>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  What we do
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Vision
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Mission
                </Link>
              </p>
              <p id="idt3">
                <i className="bi bi-chevron-right text-white custom-icon" />
                <Link className="text-white" style={{ textDecoration: "none" }}>
                  Values
                </Link>
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center text-lg-start text-white">
          <section className="p-3 pt-0 container">
            <hr className="my-3" />
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright All Right Reserved:
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-white fw-bold"
                    href="https://mdbootstrap.com/"
                  >
                    Software Alliance
                  </Link>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link className="m-2" role="button">
                  <img
                    className="cutom-ds"
                    src="./images/fb-square.png"
                    alt=""
                  />
                </Link>

                <Link className="  m-2" role="button">
                  <img
                    className="cutom-ds"
                    src="./images/linkedin-square.png"
                    alt=""
                  />
                </Link>

                <Link className="  m-2" role="button">
                  <img
                    className="cutom-ds"
                    src="./images/square-instagram.png"
                    alt=""
                  />
                </Link>

                <Link className="  m-2" role="button">
                  <img
                    className="cutom-ds"
                    src="./images/square-twitter.png"
                    alt=""
                  />
                </Link>

                <Link style={{ marginLeft: "6px" }} role="button">
                  {/* <i className="bi bi-youtube" /> */}
                  <img
                    className="cutom-ds"
                    src="./images/square-youtube.png"
                    alt=""
                  />
                </Link>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </footer>
      </div>
      {/* Copyright section and social icons */}
    </>
  );
};

export default Footer;
