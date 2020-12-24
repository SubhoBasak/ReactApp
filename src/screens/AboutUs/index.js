import React from "react";
import {Row, Col} from "react-bootstrap"
import "./style.css"

const AboutUs = () => {
    return (
        <>
            <div className="d-flex w-100 justify-content-center my-5">
                <h1>About Us</h1>
            </div>
            <Row>
                <Col md="6" sm="12">
                    <img className="about-us-img" src={require('../../assets/images/about_us.jpg').default}
                         alt="about" />
                </Col>
                <Col className="p-5" md="6" sm="12">
                    <h3 className="text-primary w-100 text-right">Platform</h3>
                    <p>
                        This is about us long long logn text. This is about us long long logn text.This
                        is about us long long logn text. This is about us long long logn text. This is
                        about us long long logn text.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="p-5 order-2 order-md-1" md="6" sm="12">
                    <h3 className="text-success w-100 text-left">Company</h3>
                    <p>
                        This is about us long long logn text. This is about us long long logn text.This
                        is about us long long logn text. This is about us long long logn text. This is
                        about us long long logn text.
                    </p>
                </Col>
                <Col md="6" sm="12" className="order-1 order-md-2">
                    <img className="about-us-img" src={require('../../assets/images/company.jpg').default}
                         alt="company" />
                </Col>
            </Row>
            <Row>
                <Col md="6" sm="12">
                    <img className="about-us-img" src={require('../../assets/images/team.jpg').default}
                         alt="team" />
                </Col>
                <Col className="p-5" md="6" sm="12">
                    <h3 className="text-warning w-100 text-right">Team</h3>
                    <p>
                        This is about us long long logn text. This is about us long long logn text.This
                        is about us long long logn text. This is about us long long logn text. This is
                        about us long long logn text.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md="6" sm="12" className="p-5 order-2 order-md-1">
                    <h3 className="text-danger w-100 text-left">Product</h3>
                    <p>
                        This is about us long long logn text. This is about us long long logn text.This
                        is about us long long logn text. This is about us long long logn text. This is
                        about us long long logn text.
                    </p>
                </Col>
                <Col md="6" sm="12" className="order-1 order-md-2" >
                    <img className="about-us-img" src={require('../../assets/images/about_product.jpg').default}
                         alt="product" />
                </Col>
            </Row>
        </>
    )
}

export default AboutUs;
