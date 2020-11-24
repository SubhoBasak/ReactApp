import React from "react";
import "./style.css";

const Plate = (props) => {
  return (
    <div className="plate">
      <img src={props.image} />
      <div>
        <p>{props.title}</p>
        <span className="text-dark">
          {props.text.length > 50
            ? props.text.slice(0, 50) + "..."
            : props.text}
        </span>
      </div>
    </div>
  );
};

export default Plate;
