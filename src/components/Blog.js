import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Blog.css";
import Footer from "./Footer";
import Featuredslider from "./Featuredslider";
import Popularpostslider from "./Popularpostslider";

const data1 = [
  {
    src: "./images/Rectangle 154.png",
    heading:
      "Guidelines on How to Hire an Offshore  Development Team in Pakistan",
    desc: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
  {
    src: "./images/Rectangle 154.png",
    heading:
      "Guidelines on How to Hire an Offshore  Development Team in Pakistan",
    desc: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
  {
    src: "./images/Rectangle 182.png",
    heading:
      "Guidelines on How to Hire an Offshore  Development Team in Pakistan",
    desc: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
  {
    src: "./images/Rectangle 172.png",
    heading:
      "Guidelines on How to Hire an Offshore  Development Team in Pakistan",
    desc: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
  },
];
const Blog = () => {
  return (
    <>
      <div
        className=" container d-flex justify-content-center img-fluid align-items-center mt-5 mb-5 col-md-8 col-sm-8 "
        style={{
          backgroundImage: `url('./images/Blog.png')`,

          backgroundSize: "cover",
          background: "cover",
          backgroundPosition: "center",

          width: "295px",
          padding: "42px",
        }}
      >
        <div className="text-center">
          <div className="container ">
            <h1 className="fw-bolder">Blog</h1>
          </div>
        </div>
      </div>

      {/* ------------------------------------Blog Header Completed----------------------------------- */}
      <Featuredslider />
      {/* ------------------------------------Featured posts completed--------------------------------- */}

      <div
        className="container-fluid"
        style={{
          backgroundImage: `url('./images/Property 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
          borderRadius: "5px",
        }}
      >
        <div className="container" style={{ marginBottom: 40 }}>
          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-sm-5">
              <div
                className="card"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  marginTop: 20,
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">Latest Posts</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-md-7">
              <div
                className="card text-center text-md-end"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginTop: 20,
                }}
              >
                <div className="card-body d-md-flex justify-content-md-end">
                  <button
                    className="btn btn-space mb-2 mb-md-0"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    All
                  </button>
                  <button className="btn btn-space mb-2 mb-md-0" id="row-btn">
                    Featured
                  </button>
                  <button className="btn btn-space mb-2 mb-md-0" id="row-btn">
                    Outsourcing
                  </button>
                  <button className="btn btn-space mb-2 mb-md-0" id="row-btn">
                    Future of work
                  </button>
                  <button className="btn mb-2 mb-md-0" id="row-btn">
                    Software Alliance News
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          {/*-------------Button and heading from right section Completed---------*/}
          {/*-----------------------Cards below the  latest posts started-----------------*/}
          <div className="row">
            {data1.map((item, ind) => {
              return (
                <div className="col-sm-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <img
                        className="img-fluid"
                        alt="reactangle"
                        src={item.src}
                      />
                      <div className="crd-lr" style={{ marginTop: 10 }}>
                        <h6 className="card-title mb-0 text-danger left-element pink-line">
                          Outsourcing
                        </h6>
                        <p className="right-element">
                          February 09,2021 10:32 AM
                        </p>
                      </div>
                      <h4 className="fw-bold">{item.heading}</h4>
                      <p className="card-text">{item.desc}</p>
                      <Link
                        className=" text-danger"
                        style={{ textDecoration: "none" }}
                      >
                        Read more <img alt="react" src="./images/arrow3.png" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*-----------------------Cards below the latest posts ended- 3in1----------------*/}
      </div>
      {/* --------------------------------Popular posts and icons started------------------------- */}

      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container">
          {/*-----------------------------Popular post and icons started-----------------------*/}
          <Popularpostslider />
          {/*-----------------------Cards below the latest posts ended- 3in1----------------*/}
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
                {" "}
                Tell us about your plans on a brief intro call and we’ll start
                the matching process.
              </h5>
              <Link
                to="/Hdev"
                id="idt"
                className="btn mt-4"
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
      </div>
      {/* ===========================================Footer Started=================================================== */}
      <Footer />
    </>
  );
};

export default Blog;
