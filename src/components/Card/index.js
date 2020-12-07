import React from "react";
import { Link } from "react-router-dom";
import { Card as CardBT, Button } from "react-bootstrap";
import "./style.css";

// components
import Rating from "../Rating";

const Card = (props) => {
  return (
    <CardBT className="card-view">
      <CardBT.Img variant="top" src={props.image} />
      <CardBT.Body>
        <Link to="/details/">
          <CardBT.Title>{props.title}</CardBT.Title>
        </Link>
        <Rating rate={props.rate} />
        <CardBT.Text>
          {props.text.length > 50
            ? props.text.slice(0, 50) + "..."
            : props.text}
        </CardBT.Text>
        <Button variant="primary">Go somewhere</Button>
      </CardBT.Body>
    </CardBT>
  );
};

export default Card;
