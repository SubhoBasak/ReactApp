import React from "react";

// import icons
import { BsStar, BsStarFill } from "react-icons/bs";

const Rating = (props) => {
  let stars = [];
  for (let i = 0; i < props.rate; i++) {
    stars.push(<BsStarFill key={i} />);
  }
  for (let i = props.rate; i < 5; i++) {
    stars.push(<BsStar key={i} />);
  }
  return (
    <div
      className="d-flex justify-content-around text-warning"
      style={{ width: "6rem" }}
    >
      {stars}
    </div>
  );
};

export default Rating;
