import React from "react";
import ImageSlider from "./ImageSlider";

function Slidersec() {
  const slides = [
    { url: "./images/3in2.jpeg", title: "beach" },
    { url: "./images/crd1.jpeg", title: "boat" },
    { url: "/images/3in2.jpeg", title: "forest" },
    { url: "./images/crd1.jpeg", title: "city" },
    { url: " ./images/crd2.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Slidersec;
