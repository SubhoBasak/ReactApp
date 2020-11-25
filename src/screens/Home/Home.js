import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

// import icons
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { VscListUnordered } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";

// components
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Row className="home-nav">
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/dashboard/">
            <p className="alert alert-primary m-0">
              <RiBarChartBoxLine className="mx-2" />
              Dashboard
            </p>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/dashboard/">
            <p className="alert alert-success m-0">
              <AiOutlineShop className="mx-2" />
              Market
            </p>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/dashboard/">
            <p className="alert alert-warning m-0">
              <VscListUnordered className="mx-2" />
              Orders
            </p>
          </Link>
        </Col>
        <Col lg="3" md="6" sm="12" className="p-0">
          <Link to="/dashboard/">
            <p className="alert alert-danger m-0">
              <FiMessageSquare className="mx-2" />
              Messages
            </p>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Home;
