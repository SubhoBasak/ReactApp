import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

// TODO - use API
import test_data from "./test_data.json";

const Banner = () => {
  // create each slides
  const slides = test_data.map((data) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={data.image} alt="Image" />
        <Carousel.Caption>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel interval={1500} style={{ zIndex: "-3" }}>
      {slides}
    </Carousel>
  );
};

export default Banner;
