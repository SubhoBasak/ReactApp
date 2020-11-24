import React from "react";
import { Link as ScrollTo } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./style.css";

// import icons
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsFileText } from "react-icons/bs";

const Terms = () => {
  return (
    <>
      <div className="w-100 m-2">
        <h2 className="ml-4 md-md-5 text-dark">
          <BsFileText className="mr-2" />
          Terms & Conditions
        </h2>
        <hr />
      </div>
      <Row>
        <Col md="3" sm="12" className="terms-category">
          <ul className="text-primary">
            <li>
              <HiOutlineChevronRight className="mr-2 text-dark" />
              <ScrollTo to="intro" spy={true} smooth={true} active>
                Introduction
              </ScrollTo>
            </li>
            <li>
              <HiOutlineChevronRight className="mr-2 text-dark" />
              <ScrollTo to="privacy" spy={true} smooth={true}>
                Privacy Policy
              </ScrollTo>
            </li>
            <li>
              <HiOutlineChevronRight className="mr-2 text-dark" />
              <ScrollTo to="subscription" spy={true} smooth={true}>
                Subscription
              </ScrollTo>
            </li>
            <li>
              <HiOutlineChevronRight className="mr-2 text-dark" />
              <ScrollTo to="content" spy={true} smooth={true}>
                Content Ownership
              </ScrollTo>
            </li>
          </ul>
        </Col>
        <Col md="9" sm="12" className="terms-body">
          <div id="intro">
            <h3>Introduction</h3>
          </div>
          <div id="privacy">
            <h3>Privacy Policy</h3>
          </div>
          <div id="subscription">
            <h3>Subscription Period, Renewal and Cancellation</h3>
          </div>
          <div id="content">
            <h3>Content Ownership</h3>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Terms;
