import React from "react";
import { Carousel } from "react-bootstrap";
import {MEDIA_URL, big_banners} from "../../API/api";
import "./style.css";

// TODO - use API
// import banners from "./test_data.json";

const Banner = () => {
    const [banners, setBanners] = React.useState([])
    React.useEffect(() => {
        big_banners(setBanners)
    }, [])

  // create each slides
  const slides = banners.map((data, index) => {
    return (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={MEDIA_URL+data.image} alt="banner" />
        <Carousel.Caption>
          <h3 style={{color: data.header_color}}>{data.header}</h3>
          <p style={{color: data.description_color}}>{data.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      className="banner-container"
      interval={1500}
    >
      {slides}
    </Carousel>
  );
};

export default Banner;
