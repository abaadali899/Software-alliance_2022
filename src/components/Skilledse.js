import React, { useState } from "react";

const data2 = [
  {
    src: "./images/Group 232.png",
    cardName: "James kale",
    role: "Game developer",
    desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
    bt1: "Java",
    bt2: "Rubby",
    bt3: "C++",
  },
  {
    src: "./images/Group 232 (1).png",
    cardName: "Musa khan",
    role: "UI/UX",
    desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
    bt1: "Adobe",
    bt2: "Canva",
    bt3: "Figma",
  },
  {
    src: "./images/Group 232.png",
    cardName: "Rafi Qazii",
    role: "Full Stack developer",
    desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
    bt1: "php",
    bt2: "React",
    bt3: "SQl",
  },
  //   Add two more similar objects for additional cards
  {
    src: "./images/Rectangle 139.png",
    cardName: "Maria laizy",
    role: "Designer",
    desc: " Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team playerpunctual  .",
    bt1: "Skill1",
    bt2: "Skill2",
    bt3: "Skill3",
  },
  {
    src: "./images/Group 232 (1).png",
    cardName: "Jane Smith",
    role: "Solution Archtechture",
    desc: "Experienced in Game , Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.",
    bt1: "third",
    bt2: "second ",
    bt3: "first ",
  },
];

function Skilledse() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? data2.length - 3 : prevSlide - 1
      );
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === data2.length - 3 ? 0 : prevSlide + 1
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h4
            className="fw-bold text-white"
            style={{ marginLeft: 15, marginTop: 60 }}
          >
            Get access to 10,000+ <br />
            skilled software engineers
          </h4>
        </div>
        <div className="col-md-6 text-end arrow-icons2">
          <img
            src="./images/Group (2).png"
            alt="Arrow 1"
            onClick={() => handleArrowClick("prev")}
            style={{ cursor: "pointer" }}
          />
          <img
            src="./images/Group (1).png"
            alt="Arrow 2"
            onClick={() => handleArrowClick("next")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="row">
        {data2.slice(currentSlide, currentSlide + 3).map((item, ind) => {
          return (
            <div className={`col-sm-4 mt-4`} key={ind}>
              <div className="card align-items-center mb-4">
                <img src={item.src} className="img-fluid mt-4" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.cardName}</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">{item.role}</small>
                  </p>
                  <p className="card-text text-center">{item.desc}</p>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm me-1"
                    >
                      {item.bt1}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-1"
                    >
                      {item.bt2}
                    </button>
                    <button type="button" className="btn btn-info btn-sm me-1">
                      {item.bt3}
                    </button>
                  </div>
                  <div className="row align-items-start mt-3">
                    <div className="col fw-bold">Experience</div>
                    <div className="col fw-bold">Country</div>
                    <div className="col fw-bold">Status</div>
                    <div className="info-col">
                      <div className="row align-items-start small">
                        <div className="col">15 Years</div>
                        <div className="col">Ukraine</div>
                        <div className="col">Available</div>
                      </div>
                      <div className="align-items-center mt-3">
                        <img
                          className="bg-danger"
                          src="./images/Group 237.png"
                          alt="pic"
                          style={{ width: "8%", borderRadius: "50%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skilledse;
