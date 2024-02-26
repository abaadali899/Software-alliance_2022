import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Services.css";
import "./General.css";
import Footer from "./Footer";

const data =[
  {
    src:"./images/group 153.png",
    heading:"Mobile App development",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
  {
    src:"./images/group 140.png",
    heading:"Web Development",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
  {
    src:"./images/group 70.png",
    heading:"Software Development",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
  {
    src:"./images/group 153.png",
    heading:"Search Engine Optimization",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
  {
    src:"./images/group 154.png",
    heading:"Blockchain development",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
  {
    src:"./images/group 155.png",
    heading:"Devops",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
]

const Services = () => {
  return (
    <>
      {/* ============================================ Services Header Started================================-=== */}
      <div className=" container d-flex justify-content-center img-fluid align-items-center mt-5 mb-5 col-md-8 col-sm-8 "   style={{
          backgroundImage: `url('./images/Services.png')`,
  
          backgroundSize:"cover",
          background: "cover",
          backgroundPosition: "center",
          Height: "305px",
          width: "466px",
          padding:"12px",
}}>
  <div className="text-center">
    <div className="container mt-2">
      <h1 className="fw-bolder">Services</h1>
    </div>
  </div>
</div>

      {/* ===============================================Main Section Started=================================== */}

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="card border-0 custommt">
              <div className="card-body ">
                <h2 className="card-title fw-bold">What We Offer</h2>
                <p>
                  We don't just build IT solutions, we build a positive client
                  relationship by going hand in hand with our customers to
                  ensure the smooth execution of implemented solutions. We offer
                  a wide range of IT services including all modern technologies
                  like Blockchain, DevOps, Games Development as well as good old
                  fashioned web technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="card border-0 float-end">
              <div className="card-body">
                <img
                  style={{ width: "100%", marginRight:" 5px"}}
                  className="img-fluid full-width-image"
                  src="./images/Group 427320782.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= Small Cards Started========================================== */}

      <div className="container">
        <div class="row mt-5">
          {data.map((item,ind)=>{
            return(
<div class="col-sm-4 mt-3 zoom-on-hover ">
            <div class="card text-center">
              <div class="card-body">
                <img 
                  src={item.src}
                 alt="" />
                <h4 className="fw-bold">{item.heading}</h4>
                <p>
                   {item.desc}
                </p>
                <img
                  className="img-fluid"
                  src="./images/group 249.png"
                  alt=""
                />
              </div>
            </div>
          </div>
            )
          })}
          
          
        </div>
         
        <div className="text-center">
          <button className="btn btn-danger col-md-2 cols-sm-2 mt-5">
            {" "}
            Show more
          </button>
        </div>
      </div>
      {/* =========================================Hire developer started=========================================== */}
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
               
              Tell us about your plans on a brief intro call and we’ll start the
              matching process.
            </h5>
            <Link
            to="/Hdev"
              id="idt"
              className="btn mt-5"
              style={{
                marginTop: 15,

                marginBottom: 30,
              }}
            >
              Hire developers
            </Link>
          </div>
        </div>
      </div>
      {/* ===========================================Footer Started=================================================== */}
      <Footer />
    </>
  );
};

export default Services;
