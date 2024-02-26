import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Hdev.css";
import Footer from "./Footer";

const data=[{
  src:"./images/crd1.jpeg",
  noex:"12.1",
  role:"Game developer",
  name:"Sylvester Stallone",
  desc:"Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player."
},
{
  src:"././images/crd1.jpeg",
  noex:"5",
  role:"React",
  name:"Oleksandr K.",
  desc:"Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player."
},
{
  src:"./images/crd1.jpeg",
  noex:"12.1",
  role:"Game developer",
  name:"Sylvester Stallone",
  desc:"Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player."
},]
const data1=[{
  src:"./images/Rectangle 146.png",
  noex:"12.1",
  role:"Game developer",
  name:"Sylvester Stallone",
  desc:"Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player."
},
{
  src:"./images/Rectangle 146.png",
  noex:"15",
  role:"Game developer",
  name:"Sylvester Stallone",
  desc:"Senior Android Developer with over 9 years of solid experience in software development. Experienced in Java, Web and Mobile Development. Hard-working, punctual and detail oriented. Good team player."
},]

const Hdev = () => {
  return (
    <>
      <div className="container mt-5"  >
        <div className="row">
          <div className="col-sm-6" style={{}}>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Hiring Developers</h5>
                <h1 className="card-text fw-bold">
                  Find{" "}
                  <span className="text-danger fw-bold">remote developers</span>
                  <br />
                  that you can trust
                </h1>
                <br />
                {/*  ============== list tags started====================================== */}
                <ul
                  style={{
                    listStyleType: "none",
                    color: "rgb(126, 120, 112)",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li>
                    <span>
                      <img src="./images/Group 301.png" alt="" />
                    </span>
                    &nbsp; 2500+ Verified Developers
                  </li>
                  <li className="mt-3">
                    <span>
                      <img src="./images/Group 301.png" alt="" />
                    </span>
                    &nbsp; 48-hours matching
                  </li>
                  <li className="mt-3">
                    <span>
                      <img src="./images/Group 301.png" alt="" />
                    </span>
                    &nbsp; 1.75 interview-to-hire ratio
                  </li>
                </ul>

                <Link href="#" className="btn btn-danger mt-5">
                  Hire Developers
                </Link>
              </div>
            </div>
          </div>

          {/* images==================== */}
          <div className="col-sm-6" style={{ marginTop: "15px" }}>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <div className="container">
                  <div className="position-relative">
                    <img
                      src="./images/sp2.png"
                      alt="BackgroundImage"
                      className="img-fluid"
                      style={{ width: "100%" }} // Ensure the image fills the container width
                    />
                    <img
                      src="./images/sp1.png"
                      alt="boypic"
                      className="img-fluid position-absolute top-0 start-50 translate-middle-x" // Position the image at the top-middle of the container
                      style={{
                        width: "145%",
                        maxWidth: "none",
                        zIndex: 1,
                      }} // Set maximum width and z-index to ensure the top image covers half of the bottom image
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/*Main Landing Page started Section 2------------------------------------------------*/}
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(90deg, rgba(58,153,180,1) 26%, rgba(196,78,78,1) 78%, rgba(203,153,96,1) 98%, rgba(242,183,99,1) 100%)",
        }}
      >
        {/* ========================buttons started======================== */}

        <div className="container ">
          <br />
          <div className="card-body d-md-flex  justify-content-center mt-5">
            <button className="btn btn-space mb-2 mb-md-0 " style={{color:"black",backgroundColor:"white"}}>
              All
            </button>
            <button className="btn btn-space mb-2 mb-md-0" id="row-btn">
              Javascript
            </button>
            <button className="btn btn-space   mb-2 mb-md-0" id="row-btn">
              Angular
            </button>
            <button className="btn btn-space mb-2 mb-md-0" id="row-btn">
              React js
            </button>
            <button className="btn mb-2 btn-space  mb-md-0" id="row-btn">
              Rubby On Rails
            </button>
            <button className="btn mb-2 mb-md-0 btn-space " id="row-btn">
              Java
            </button>
            <button className="btn mb-2 mb-md-0 btn-space " id="row-btn">
              Python
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/*-Buttons Ended----------------------------------------------------------------------*/}
            {data.map((item,ind)=>{
              return(
                <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body">
                        <img
                          src={item.src}
                          alt="react"
                          style={{
                            borderRadius: 10,
                            width: "120%",
                            objectFit: "cover",
                          }}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="card" style={{ border: "none" }}>
                      <span
                        style={{ marginRight: "90px", marginTop: "20px" }}
                        className="text-danger fw-bolder ms-auto"
                      >
                        {item.noex}
                      </span>
                      <div className="card-body">
                        <div className="d-sm-inline-flex justify-content-between w-100">
                          <p className="d-inline mb-0">{item.role}</p>
                          <p className="d-inline mb-0 ms-sm-auto">
                            Years of Experience
                          </p>
                        </div>
                        <h4 className="fw-bolder">{item.name}</h4>
                        <p style={{ color: "rgb(126, 120, 112)" }}>
                           {item.desc}
                        </p>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div>
                            <button className="btn btn-danger me-3 my-2">
                              Java
                            </button>
                            <button className="btn btn-primary me-3 my-2">
                              React Native
                            </button>
                            <button className="btn btn-primary me-3 my-2">
                              C#
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-light me-3 my-2"
                              style={{
                                backgroundColor: "#eeb0b0",
                                color: "rgb(5, 4, 4)",
                              }}
                            >
                              View Portfolio
                            </button>
                            <button className="btn btn-danger my-2">
                              Hire Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
            
      {/* ================================Blur Cards====================================== */}
             
           
            {/*---- 4th an 5th card that were blur------------------------------------------------*/}
            <div className="container" style={{ filter: "blur(4px)" }}>
              
            {data1.map((item,ind)=>{
              return(
                <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body">
                        <img
                          src={item.src}
                          alt="react"
                          style={{
                            borderRadius: 10,
                            width: "120%",
                            objectFit: "cover",
                          }}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="card" style={{ border: "none" }}>
                      <span
                        style={{ marginRight: "90px", marginTop: "20px" }}
                        className="text-danger fw-bolder ms-auto"
                      >
                        {item.noex}
                      </span>
                      <div className="card-body">
                        <div className="d-sm-inline-flex justify-content-between w-100">
                          <p className="d-inline mb-0">{item.role}</p>
                          <p className="d-inline mb-0 ms-sm-auto">
                            Years of Experience
                          </p>
                        </div>
                        <h4 className="fw-bolder">{item.name}</h4>
                        <p style={{ color: "rgb(126, 120, 112)" }}>
                           {item.desc}
                        </p>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div>
                            <button className="btn btn-danger me-3 my-2">
                              Java
                            </button>
                            <button className="btn btn-primary me-3 my-2">
                              React Native
                            </button>
                            <button className="btn btn-primary me-3 my-2">
                              C#
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-light me-3 my-2"
                              style={{
                                backgroundColor: "#eeb0b0",
                                color: "rgb(5, 4, 4)",
                              }}
                            >
                              View Portfolio
                            </button>
                            <button className="btn btn-danger my-2">
                              Hire Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
              
               
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/*----------------------------------------outer container fluid started-----------------------*/}
      <br />
      <br />
      <br />
      <div
        className=" container text-center"
        style={{
          background:
            "linear-gradient(90deg, rgb(109, 146, 194) 26%, rgb(206, 69, 211) 78%, rgb(206, 69, 221) 98%, rgba(206, 69, 221) 100%)",
          borderRadius: 5,
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ paddingTop: 40, color: "white" }}>
            Tell us about your plans on a brief intro call and we’ll start the
            matching process.
          </h5>
          <Link id="idt" className="btn mt-5 mb-3" style={{ marginTop: 25 }}>
            Hire developers
          </Link>
          <br />
          <br />
        </div>
      </div>
      {/* ===========================================Footer Started=================================================== */}
      <Footer />
    </>
  );
};

export default Hdev;
