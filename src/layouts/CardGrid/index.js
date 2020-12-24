import React from "react";
import { Row } from "react-bootstrap";
import {MEDIA_URL} from "../../API/api";

// components
import Card from "../../components/Card";

const CardGrid = (props) => {
  const items = props.products.map((data, index) => (
    <Card
      key={index}
      product_id={data.id}
      title={data.name}
      image={MEDIA_URL+data.get_thumbnail}
      text={data.description}
      rate={data.rating}
    />
  ));
  return <Row className="w-100 ml-1 mt-2">{items}</Row>;
};

export default CardGrid;
