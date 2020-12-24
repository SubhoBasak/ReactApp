import React from "react";
import { Link } from "react-router-dom";
import { Card as CardBT } from "react-bootstrap";
import "./style.css";

// components
import Rating from "../Rating";

const Card = (props) => {
  return (
    <CardBT className="card-view">
      <CardBT.Img variant="top" src={props.image} />
      <CardBT.Body>
        <Link to={"/details/"+props.product_id} target="_blank">
          <CardBT.Title>{props.title}</CardBT.Title>
        </Link>
        <Rating rate={props.rate} />
        <CardBT.Text>
          {props.text.length > 100
            ? props.text.slice(0, 100) + "..."
            : props.text}
        </CardBT.Text>
      </CardBT.Body>
    </CardBT>
  );
};

export default Card;
