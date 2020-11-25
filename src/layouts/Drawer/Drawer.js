import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./style.css";

const Drawer = (props) => {
  return (
    <Container fluid>
      <Row className="drawer">
        <Col lg="3" md="5" sm="12" className="drawer-top">
          {props.top}
        </Col>
        <Col lg="9" md="7" sm="12" className="drawer-bottom p-0">
          {props.bottom}
        </Col>
      </Row>
    </Container>
  );
};

export default Drawer;
