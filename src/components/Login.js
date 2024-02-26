import React from "react";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import Nav from "./Nav";

const Login = () => {
  /*-------------------Header section ended-------------------*/

  return (
    <div className="container-fluid">
      {/* <Nav /> */}
      <div className="row">
        <div className="col-sm-7">
          <div className="card" style={{ border: "none", marginTop: 100 }}>
            <div className="card-body text-center d-flex align-items-center justify-content-center">
              <h2 className="card-title fw-bolder">
                Hey, great to see
                <br />
                <span className="text-danger">you</span> again
              </h2>
            </div>
            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(235, 231, 225)",
                padding: 7,
                marginLeft: "27%",
                marginRight: "27%",
                borderRadius: 5,
                border: "none",
              }}
            >
              <img
                src="./images/linkedin.png"
                alt="ract"
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
                marginLeft: "27%",
                marginRight: "27%",
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
            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(235, 231, 225)",
                padding: 7,
                marginLeft: "27%",
                marginRight: "27%",
                borderRadius: 5,
                border: "none",
              }}
            >
              <img
                src="./images/facebook.jpeg"
                alt="react"
                className="img-fluid mr-2"
                style={{ width: 22, marginRight: 5 }}
              />
              Sign In with Facebook
            </button>

            <div
              className="hr-sect"
              style={{ marginLeft: "24%", marginRight: "24%" }}
            >
              Or
            </div>
            <h5
              style={{ marginTop: 15, cursor: "pointer" }}
              className="fw-bold text-danger d-flex align-items-center justify-content-center text-center"
            >
              <Link
                to="/Signup"
                className="text-danger"
                style={{ textDecoration: "none" }}
              >
                Sign in with email
              </Link>
            </h5>
            <div
              id="signupid"
              className="d-flex align-items-center justify-content-center"
            >
              <p style={{ marginTop: 25 }}>
                Don’t have software alliance account?{" "}
                <span className="fw-bold " style={{ cursor: "pointer" }}>
                  <Link
                    to="/Signin"
                    className="text-danger"
                    style={{ textDecoration: "none" }}
                  >
                    SignUp
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

export default Login;
