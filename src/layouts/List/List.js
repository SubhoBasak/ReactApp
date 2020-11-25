import React from "react";
import "./style.css";

const List = (props) => {
  return <div className="list-container">{props.items}</div>;
};

export default List;
