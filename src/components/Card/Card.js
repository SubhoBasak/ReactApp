import React from "react";
import { Card as CardBT, Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <CardBT style={{ width: "18rem", minWidth: "18rem", zIndex: "-200" }}>
      <CardBT.Img variant="top" src={props.image} />
      <CardBT.Body>
        <CardBT.Title>{props.title}</CardBT.Title>
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
