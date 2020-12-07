import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./style.css";

// import icons
import { TiTickOutline } from "react-icons/ti";

const Details = (props) => {
  return (
    <>
      <Row>
        <Col lg="6" md="12" className="img-container">
          <div className="main-img-container">
            <img
              className="main-img"
              src="https://picsum.photos/858/660"
              alt="product"
            />
          </div>
          <div className="sub-imgs mx-lg-3">
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
            <img src="https://picsum.photos/858/660" alt="product" />
          </div>
        </Col>
        <Col lg="6" md="12" className="p-lg-4 p-md-4 product-details-text">
          <h2 className="m-3">Product 1</h2>
          <h3 className="text-danger m-3">Rs. 300/-</h3>
          <Row className="details-btn mx-3 my-5">
            <Button className="mr-2" variant="primary">
              Order
            </Button>
            <Button variant="success">Message</Button>
          </Row>
          <p className="m-3 text-dark mb-5">
            This is a long long long product description for testing. This is a
            long long long product description for testing. This is a long long
            long product description for testing. This is a long long long
            product description for testing. This is a long long long product
            description for testing.
          </p>
          <ul className="ml-5">
            <li className="text-primary">
              <TiTickOutline /> Product specification 1
            </li>
            <li className="text-success">
              <TiTickOutline /> Product specification 2
            </li>
            <li className="text-warning">
              <TiTickOutline /> Product specification 3
            </li>
            <li className="text-danger">
              <TiTickOutline /> Product specification 4
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Details;
