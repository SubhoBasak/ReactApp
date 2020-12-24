import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

// import icons
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="footer p-4">
        <Col md="4" sm="12">
          <h5>Know about us</h5>
          <ul>
            <li>
              <Link to={"/about_us/"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact_us/"}>Contact us</Link>
            </li>
            <li>
              <Link to={"/learn_more/"}>Learn more</Link>
            </li>
            <li>
              <Link to={"/terms/"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/acknowledgements/"}>Acknowledgements</Link>
            </li>
          </ul>
        </Col>
        <Col md="4" sm="12">
          <h5>Follow us on</h5>
          <ul className="text-dark">
            <li>
              <AiOutlineFacebook className="mr-2" />
              <Link to={"/facebook/"}>Facebook</Link>
            </li>
            <li>
              <AiOutlineInstagram className="mr-2" />
              <Link to={"/instagram/"}>Instagram</Link>
            </li>
            <li>
              <FiTwitter className="mr-2" />
              <Link to={"/twitter/"}>Twitter</Link>
            </li>
            <li>
              <AiOutlineLinkedin className="mr-2" />
              <Link to={"/linkedin/"}>LinkedIn</Link>
            </li>
          </ul>
        </Col>
        <Col md="4" sm="12">
          <Form className="pr-md-5">
            <h3>
              <FaMailBulk className="mr-2" />
              Newsletter
            </h3>
            <input
              className="form-control m-1"
              type="email"
              placeholder="Email"
              required
            />
            <Button className="btn btn-success m-1">Submit</Button>
          </Form>
        </Col>
      </Row>
      <div className="copyright w-100 d-flex justify-content-center">
        <p>
          © Copyright 2020 by Subho Basak (<span>subhobasak50@gmail.com</span>)
        </p>
      </div>
    </Container>
  );
};

export default Footer;
