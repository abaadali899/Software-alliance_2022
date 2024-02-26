import React from "react";
import "./Forgot.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Forgot = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="card" style={{ border: "none", marginTop: 150 }}>
            <div className="card-body text-center card-body d-flex align-items-center justify-content-center">
              <h2 className="card-title fw-bolder">
                Enter the email adresss
                <br />
                associated with your account
              </h2>
            </div>
            <form style={{ marginLeft: "26%", marginTop: 10 }}>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="inputEmail4" className="fw-bold w-25">
                    Email
                  </label>
                  <br />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
            </form>
            <br />
            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(211, 65, 65)",
                padding: 7,
                marginLeft: "26%",
                marginRight: "24%",
                borderRadius: 5,
                border: "none",
                color: "white",
              }}
            >
              Send Link
            </button>
          </div>
        </div>

        <div
          className="col-sm-5"
          style={{
            backgroundImage: `url('./images/Rectangle 149.png')`,
            backgroundSize: "cover",
            background: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div
            className="card"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <div
              className="card-body"
              style={{ marginTop: 30, marginLeft: 30 }}
            >
              <Link to="">
                <img
                  className="img-fluid"
                  alt="react"
                  src="./images/Frame.png"
                  style={{ width: 140 }}
                />
              </Link>
              <h2
                className="card-title fw-bolder"
                style={{ marginTop: 125, color: "white" }}
              >
                - Make a hire. <br />
                We’ve got the rest
              </h2>

              <div className="row no-gutters" style={{ marginTop: 30 }}>
                <div className="col-md-3">
                  <img
                    src="./images/Group 232.png"
                    alt="react"
                    className="img-fluid"
                    style={{ width: 70 }}
                  />
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h6
                      className="card-title fw-bold"
                      style={{ color: "white", marginTop: -10 }}
                    >
                      Khizer Arshad
                    </h6>
                    <p
                      className="card-text"
                      style={{ color: "white", fontSize: "smaller" }}
                    >
                      Chief Technology Offier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
