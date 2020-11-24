import React from "react";
import { Row } from "react-bootstrap";
// components
import Card from "../../components/Card";

const Grid = (props) => {
  const items = props.products.map((data) => (
    <Card title={data.name} image={data.thumbnail} text={data.description} />
  ));
  return <Row className="px-5 mt-2">{items}</Row>;
};

export default Grid;
