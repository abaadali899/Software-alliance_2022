import React from "react";
import "./Contact2.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contact2 = () => {
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
          <div className="col-md-7 bg-white p-4" style={{ marginTop: "130px" }}>
            <h5 className="mt-3">
              Questin 2/<span>6</span>
            </h5>
            <h2 className="mt-3">What number of employees you have? </h2>
            {/* ========================== check box started =============================== */}

            <div
              className="p-1 mt-3"
              style={{
                border: "1px solid rgb(192,45,78)",
                width: "60%",
                borderRadius: "5px",
              }}
            >
              <input
                className="form-check-input me-2 p-1"
                type="checkbox"
                style={{
                  borderColor: "rgb(192,45,78)",
                  color: "rgb(192,45,78)",
                  marginLeft: "10px",
                }}
                defaultValue=""
              />
              <label className="form-check-label ">It's Just me</label>
            </div>
            <div
              className="p-1 mt-3"
              style={{
                border: "1px solid rgb(192,45,78)",
                width: "60%",
                borderRadius: "5px",
              }}
            >
              <input
                className="form-check-input me-2 p-1"
                type="checkbox"
                style={{
                  borderColor: "rgb(192,45,78)",
                  color: "rgb(192,45,78)",
                  marginLeft: "10px",
                }}
                defaultValue=""
              />
              <label className="form-check-label ">Less than 50</label>
            </div>
            <div
              className="p-1 mt-3"
              style={{
                border: "1px solid rgb(192,45,78)",
                width: "60%",
                borderRadius: "5px",
              }}
            >
              <input
                className="form-check-input me-2 p-1"
                type="checkbox"
                style={{
                  borderColor: "rgb(192,45,78)",
                  color: "rgb(192,45,78)",
                  marginLeft: "10px",
                }}
                defaultValue=""
              />
              <label className="form-check-label ">10-50</label>
            </div>
            <div
              className="p-1 mt-3"
              style={{
                border: "1px solid rgb(192,45,78)",
                width: "60%",
                borderRadius: "5px",
              }}
            >
              <input
                className="form-check-input me-2 p-1"
                type="checkbox"
                style={{
                  borderColor: "rgb(192,45,78)",
                  color: "rgb(192,45,78)",
                  marginLeft: "10px",
                }}
                defaultValue=""
              />
              <label className="form-check-label ">More than 50</label>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-center">
                <div className="image-container">
                  <Link to="./Contact">
                    <img
                      src="./images/Group 224.png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Link to="./Contact3">
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
          {/* ============ right side================================= */}
          <div
            className="col-md-5 d-flex justify-content-center align-items-center "
            style={{
              backgroundImage: `url('./images/Rectangle 131.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              marginTop: "130px",
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

export default Contact2;
