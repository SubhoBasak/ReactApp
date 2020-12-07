import React from "react";
import { Row, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import "./style.css";

// import icons
import { FiCheckSquare } from "react-icons/fi";

const Subscription = () => {
  return (
    <>
      <div className="w-100 d-flex justify-content-center pt-2">
        <h1>Subscription</h1>
      </div>
      <Row className="p-lg-5 justify-content-around">
        <Card className="pack-card border border-primary my-5">
          <Card.Body className="p-0">
            <div className="w-100 d-flex justify-content-center p-5">
              <h1 className="text-primary">1 Month</h1>
            </div>
            <div className="w-100 d-flex justify-content-center bg-primary p-2">
              <h3 className="text-light">Rs. 50/-</h3>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Full market access
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Email notification
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-danger mr-2" />
              Mimimum dashboard
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <div className="w-100 d-flex justify-content-center">
              <Button className="subscribe-btn" variant="primary">
                Subscribe
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="pack-card border border-success my-5">
          <Card.Body className="p-0">
            <div className="w-100 d-flex justify-content-center p-5">
              <h1 className="text-success">6 Month</h1>
            </div>
            <div className="w-100 d-flex justify-content-center bg-success p-2">
              <h3 className="text-light">Rs. 280/-</h3>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Full market access
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Email notification
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-warning mr-2" />
              Medium dashboard
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <div className="w-100 d-flex justify-content-center">
              <Button className="subscribe-btn" variant="success">
                Subscribe
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="pack-card border border-warning my-5">
          <Card.Body className="p-0">
            <div className="w-100 d-flex justify-content-center p-5">
              <h1 className="text-warning">12 Month</h1>
            </div>
            <div className="w-100 d-flex justify-content-center bg-warning p-2">
              <h3 className="text-light">Rs. 550/-</h3>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Full market access
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Email notification
            </ListGroupItem>
            <ListGroupItem>
              <FiCheckSquare className="text-success mr-2" />
              Full dashboard
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <div className="w-100 d-flex justify-content-center">
              <Button className="subscribe-btn text-light" variant="warning">
                Subscribe
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default Subscription;
