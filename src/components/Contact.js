import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('./images/Property 1.png')`,
        backgroundSize: "cover",
        background: "cover",
        backgroundPosition: "center",
        height: "auto",
        minHeight: "100vh", // Set height to 100vh
        minWidth: "100vw", // Set width to 100vw
      }}
    >
      <div class="container col-md-10">
        <div class="row">
          <div className="col-md-7 col-sm-7 bg-white p-4 mt-5 mb-4">
            <h2 className="fw-bold">Ready to Get Started?</h2>
            <div
              className="mt-4"
              style={{
                backgroundColor: " #eeb0b0",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <p className="text-danger fw-semibold ">
                Thanks for your interest. Before we get started, we need you to
                help us better understand your business needs by answering a few
                questions. This part takes less than a minute.
              </p>
            </div>

            <h5 className="mt-3">
              Questin 1/<span>6</span>
            </h5>
            <h2 className="mt-3">First tell us about company:</h2>
            <h6 style={{ color: "" }}>Company Name*</h6>
            <input
              style={{
                maxWidth: "60%",
                backgroundColor: " rgba(217,217,217)",
                marginTop: "15px",
              }}
              type="rext"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            ></input>
            <h6 className="mt-3">Company Website</h6>
            <input
              style={{
                maxWidth: "60%",
                backgroundColor: " rgba(217,217,217)",
                marginTop: "15px",
              }}
              type="rext"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            ></input>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-center">
                <div className="image-container">
                  <img
                    src="./images/Group 224.png"
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                  <Link to="./Contact2">
                    <img
                      src="./images/Group 225.png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ============ right side  */}
          <div
            className="col-md-5 col-sm-5 d-flex justify-content-center align-items-center mt-5 mb-4"
            style={{
              backgroundImage: `url('./images/Rectangle 131.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              position: "relative" /* Added position relative */,
              overflow:
                "hidden" /* Added overflow hidden to hide overflowing logo */,
            }}
          >
            <Link to="">
              <img
                src="./images/logo.png"
                alt=""
                style={{
                  width: "170px",
                  height: "auto",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
