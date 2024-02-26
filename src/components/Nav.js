import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./General.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container mt-auto" style={{ border: "none" }}>
          <nav className="navbar navbar-expand-xl navbar-light">
            <div className="container-fluid">
              <Link to="" className="navbar-brand custom-logo">
                <img
                  className="custom-size-logo"
                  src="./images/logo.png"
                  alt="Your Logo"
                  
                />
              </Link>
              <button
                className="navbar-toggler border-0 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      style={{ marginLeft: 80 }}
                      to=""
                    >
                      Home
                    </Link>
                  </li>
                {/*====================== It drop down started=====================  */}
                  <li className="nav-item dropdown d-lg-inline-block">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ marginLeft: 15 }}
                    >
                      Company
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                      style={{ border: "none" }}
                    >
                      <li>
                        <Link
                          id="idt2"
                          to="/about"
                          className="dropdown-item dropdown-item1"
                          href="#"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          id="idt2"
                          className="dropdown-item dropdown-item1 "
                          to="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          id="idt2"
                          to="/contact"
                          className="dropdown-item dropdown-item1"
                          href="#"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          id="idt2"
                          to="/portfolio"
                          className="dropdown-item dropdown-item1"
                          href="#"
                        >
                          Portfolio
                        </Link>
                      </li>
                    </ul>
                  </li> 
                  
                  {/* ============================Drop down ended================== */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ marginLeft: 15 }}
                      to="/Hdev"
                    >
                      Hire developers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ marginLeft: 15 }}
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                </ul>

                <button
                  className="btn text-danger fw-bold"
                  style={{ marginRight: 10, marginLeft: 61 }}
                  type="button" // Ensure to specify type="button" to prevent form submission
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }} // Remove text decoration and inherit color
                  >
                    login
                  </Link>
                </button>

                <button
                  id="idt2"
                  className="btn btn-space text-end me-auto  "
                  type="submit"
                >
                  Become a Partner
                </button>
                <button
                  id="idt2"
                  className="btn  text-end me-auto  "
                  type="submit"
                >
                  <Link
                  className="btn-space"
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Hire Developers
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Nav;