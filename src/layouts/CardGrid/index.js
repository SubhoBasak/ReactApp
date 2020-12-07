import React from "react";
import { Row } from "react-bootstrap";
// components
import Card from "../../components/Card";

const CardGrid = (props) => {
  const items = props.products.map((data) => (
    <Card
      title={data.name}
      image={data.thumbnail}
      text={data.description}
      rate={data.rating}
    />
  ));
  return <Row className="w-100 ml-1 mt-2">{items}</Row>;
};

export default CardGrid;
