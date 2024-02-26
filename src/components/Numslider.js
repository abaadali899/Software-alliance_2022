import React from "react";

const data = [
  {
    src: "./images/Group 354.png",
  },
  {
    src: "./images/Group 427320653.png",
  },
  {
    src: "./images/G1.png ",
  },
  {
    src: "./images/Group 427320739.png",
  },
];
function Numslider() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          {data.map((item, ind) => {
            return (
              <div className="col-sm-6 col-md-3 d-flex justify-content-center zoom-on-hover ">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      className="img-fluid "
                      src={item.src}
                      alt="1st pic"
                      style={{ maxWidth: "155px",height:"110px" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Numslider;
