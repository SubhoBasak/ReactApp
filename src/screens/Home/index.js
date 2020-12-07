import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

// import icons
import { TiTickOutline } from "react-icons/ti";

// components
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Row className="home-nav">
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/dashboard/">
            <div className="home-nav-link alert alert-primary m-0">
              <div className="d-flex w-100">
                <img
                  src={require("../../assets/images/dashboard.png").default}
                  alt="icon"
                />
                <p>Dashboard</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/market/">
            <div className="home-nav-link alert alert-success m-0">
              <div className="d-flex w-100">
                <img
                  src={require("../../assets/images/market.png").default}
                  alt="icon"
                />
                <p>Market</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/orders/">
            <div className="home-nav-link alert alert-warning m-0">
              <div className="d-flex w-100">
                <img
                  src={require("../../assets/images/orders.png").default}
                  alt="icon"
                />
                <p>Orders</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/message/">
            <div className="home-nav-link alert alert-danger m-0">
              <div className="d-flex w-100">
                <img
                  src={require("../../assets/images/messages.png").default}
                  alt="icon"
                />
                <p>Messages</p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      <Row className="grow">
        <Col lg="7" md="6" sm="12">
          <img
            src={require("../../assets/images/grow.jpg").default}
            alt="grow"
          />
        </Col>
        <Col lg="5" md="6" sm="12" className="grow-text mt-lg-5">
          <p className="grow-text-header mt-lg-2">Grow your business with us</p>
          <p className="grow-text-body">
            Connect with the large community. More designes, more categories,
            more merchants. Work smart, not hard.
            <ul className="mt-5 pl-3">
              <li className="m-2 text-primary">
                <TiTickOutline className="mr-2" />
                Easy to use
              </li>
              <li className="m-2 text-success">
                <TiTickOutline className="mr-2" />
                Mobile compatible
              </li>
              <li className="m-2 text-warning">
                <TiTickOutline className="mr-2" />
                Budget friendly
              </li>
              <li className="m-2 text-danger">
                <TiTickOutline className="mr-2" />
                Safe and secure
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Home;
