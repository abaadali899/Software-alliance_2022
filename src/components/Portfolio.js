import React from "react";
import "./Portfolio.css";
import "./General.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";

const data=[
  {
    src:"./images/Rectangle 184.png",
    heading:"Chase Race",

  },
  {
    src:"./images/Rectangle 182.png",
    heading:"Smart Resume",

  },
  {
    src:"./images/Rectangle 168.png",
    heading:"Wizzi Kids",

  },
  {
    src:"./images/Rectangle 184.png",
    heading:"Chase Race",

  },
  {
    src:"./images/Rectangle 182.png",
    heading:"Smart Resume",

  },
  {
    src:"./images/Rectangle 168.png",
    heading:"Wizzi Kids",

  },
  {
    src:"./images/Rectangle 184.png",
    heading:"Chase Race",

  },
  {
    src:"./images/Rectangle 182.png",
    heading:"Smart Resume",

  },
  {
    src:"./images/Rectangle 168.png",
    heading:"Wizzi Kids",

  },
]

function Portfolio() {
  return (
    <>
       <div className=" container d-flex justify-content-center img-fluid align-items-center mt-5 mb-5 col-md-8 col-sm-8 "   style={{
          backgroundImage: `url('./images/Portfolio (1).png')`,
  
          backgroundSize:"cover",
          background: "cover",
          backgroundPosition: "center",
          Height: "305px",
          width: "530px",
          padding:"19px",
              }}>
  <div className="text-center">
    <div className="container mt-2">
      <h1 className="fw-bolder">Portfolio</h1>
    </div>
  </div>
</div>
      {/* ================================================header ended================================ */}
      <div className="container" style={{ marginTop: "60px" }}>
        <h4 className="fw-bolder">Explore Our Awesome Projects</h4>
        <p className="mt-2">
          Take a look at some of our recent success stories and you’ll get to
          know how expertly we can drive your creative ideas. Let’s build
          something amazing together. Empower your brand and products with
          modern designs backed with clean codes. We offer top-tier
          functionality through personalized website design and development
          solutions. We don’t believe in imitation, rather succeeding in
          meaningful originality. Our designing masters, development geeks, and
          SEO wizards are well-versed with contemporary tools and tactics to
          make your online presence powerful.
        </p>
      </div>
      {/* ============================================section with paragraph ended==================== */}
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-9">
            <div className="card border-0" style={{ marginTop: 20 }}>
              <div className="card-body d-flex justify-content-center flex-wrap">
                <button
                  style={{ color: "white", backgroundColor: "rgb(192,45,78)" }}
                  className="btn btn-space mb-2 mb-md-0 text-white  "
                >
                  All
                </button>
                <button className="btn btn-space mb-2 mb-md-0" id="btns">
                  Blockchain and software development
                </button>
                <button className="btn btn-space mb-2 mb-md-0" id="btns">
                  Mobile and game apps
                </button>
                <button className="btn btn-space mb-2 mb-md-0" id="btns">
                  web and landing pages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================== Buttons Ended===================================== */}
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          {data.map((item,ind)=>{
            return(
              <div className="col-sm-4 col-md-4 mt-4 ">
            <div
              className="shadow-lg card-body text-center"
              style={{ borderRadius: "5px" }}
            >
              <img
                className="img-fluid"
                src={item.src}
                alt=""
              />
              <div className="mt-3">
                <h5>{item.heading}</h5>
                <Link id="idt" className="btn border-danger mt-3 mb-5">
                  <i class="bi bi-link-45deg"></i> Live demo
                </Link>
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
      
      {/* ========================================9 cards ended and container junmotron started================== */}
      <div
        className=" container text-center"
        style={{
          marginTop: "60px",
          background:
            "linear-gradient(90deg, rgb(109, 146, 194) 26%, rgb(206, 69, 211) 78%, rgb(206, 69, 221) 98%, rgba(206, 69, 221) 100%)",
          borderRadius: 5,
        }}
      >
        <div className="card-body">
          <h5
            className="card-title "
            style={{ paddingTop: 40, color: "white" }}
          >
            Tell us about your plans on a brief intro call and we’ll start the
            matching process.
          </h5>
          <Link to="/Hdev" id="idt" className="btn mb-3 mt-5 ">
            Hire developers
          </Link>
          <br />
          <br />
        </div>
      </div>
      {/* =========================================== Footer Started====================================== */}
      <Footer />
    </>
  );
}

export default Portfolio;
