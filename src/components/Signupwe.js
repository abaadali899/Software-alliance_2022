import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signupwe = () => {
  /*-------------------Header section ended-------------------*/

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body text-center card-body d-flex align-items-center justify-content-center">
              <h2 className="card-title fw-bolder">
                we have a{" "}
                <span className="text-danger">
                  perfect <br /> match
                </span>
                for you
              </h2>
            </div>
            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(235, 231, 225)",
                padding: 7,
                marginLeft: "26%",
                marginRight: "25%",
                borderRadius: 5,
                border: "none",
              }}
            >
              <img
                src="./images/linkedin.png"
                alt="react"
                className="img-fluid"
                style={{ width: 25, marginRight: 5 }}
              />
              Sign In with LinkedIn
            </button>
            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(235, 231, 225)",
                padding: 7,
                marginLeft: "26%",
                marginRight: "25%",
                borderRadius: 5,
                border: "none",
              }}
            >
              <img
                src="./images/google.jpeg"
                alt="react"
                className="img-fluid mr-2"
                style={{ width: 19, marginRight: 5 }}
              />
              Sign In with Google
            </button>

            <div
              className="hr-sect"
              style={{ marginLeft: "24%", marginRight: "24%" }}
            >
              Or
            </div>
            <form style={{ marginLeft: "26%", marginTop: 10 }}>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="input" className="fw-bold w-25">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="input" className="fw-bold w-25">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="input"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group col-md-8" style={{ marginTop: 10 }}>
                  <label htmlFor="inputPassword4" className="fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row d-flex d-inline-block form-group col-md-8 align-items-center  ">
                <label>
                  By creating an account, you agree to the
                  <span className="text-danger">
                    {" "}
                    terms
                    <br /> & conditions
                  </span>
                  , and
                  <span className="text-danger"> privacy policy.</span>
                </label>
              </div>
            </form>

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
              Sign In
            </button>
            <div
              id="signupid"
              className="d-flex align-items-center justify-content-center"
            >
              <p style={{ marginTop: 12 }}>
                Already have a software alliance account?
                <span
                  className="fw-bold text-danger"
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    to="./signup"
                    style={{ cursor: "pointer" }}
                    className=" text-decoration-none text-danger fw-bold "
                  >
                    SignIn
                  </Link>
                </span>
              </p>
            </div>
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

export default Signupwe;
