import React from "react";

// components
import Card from "../../components/Card";

const Grid = (props) => {
  const items = props.products.map((data) => (
    <Card title={data.name} image={data.thumbnail} text={data.description} />
  ));
  return <div style={{ display: "flex", padding: "5px" }}>{items}</div>;
};

export default Grid;
