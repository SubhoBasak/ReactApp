import React from "react";

// components
import Plate from "../../components/Plate";

const List = (props) => {
  const items = props.products.map((data) => (
    <Plate title={data.name} image={data.thumbnail} text={data.description} />
  ));
  return <div style={{ display: "block", padding: "5px" }}>{items}</div>;
};

export default List;
