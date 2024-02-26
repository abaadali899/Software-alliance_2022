import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Contact3() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body text-center card-body d-flex align-items-center justify-content-center">
              <h2 className="card-title fw-bolder">
                Contact
                <span className="text-danger"> Us</span>
              </h2>
            </div>
            <p className="d-flex align-items-center justify-content-center">
              Have a question? Write to us!
            </p>
            <form style={{ marginLeft: "26%", marginTop: 10 }}>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="inputEmail4" className="fw-bold w-25">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Full name*"
                  />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="inputPhone" className="fw-bold w-25">
                    Phone*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Phone*"
                  />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="inputEmail4" className="fw-bold w-25">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email adress*"
                  />
                </div>
                <div className="form-group col-md-8" style={{ marginTop: 10 }}>
                  <label htmlFor="inputPassword4" className="fw-bold">
                    Your message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Your message"
                  />
                  <input
                    className="form-check-input me-2 p-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <label className="form-check-label ">
                    I consent to the processing of data for the purpose of
                    telephone contact*.
                  </label>
                </div>
              </div>
            </form>

            <button
              style={{
                margin: 7,
                backgroundColor: "rgb(192,45,78)",
                padding: 7,
                marginLeft: "26%",
                marginRight: "24%",
                borderRadius: 5,
                border: "none",
                color: "white",
              }}
            >
              Send a message
            </button>
            <div
              id="signupid"
              className="d-flex align-items-center justify-content-center"
            ></div>
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
                Check, <br />
                We can <br />
                help you!
              </h2>

              <div className="no-gutters" style={{ marginTop: 30 }}>
                <div className="col-md-6">
                  <h6 style={{ color: "white" }}>Contact:</h6>
                  <p style={{ color: "white" }}>
                    {" "}
                    <span className="fw-bold">Phone:</span> +92 3009794063
                  </p>
                  <p style={{ color: "white" }}>
                    <span className="fw-bold"> Email: </span>
                    info@softwarealliance.dk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact3;
