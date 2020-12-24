import React from "react"
import {Row, Col, Button} from "react-bootstrap"
import "./style.css"

const ContactUs = () => {
    return (
        <div>
            <div className="d-flex w-100 justify-content-center my-5">
                <h1>Contact Us</h1>
            </div>
            <Row>
                <Col md="6" sm="12">
                    <img className="contact-us-img" src={require('../../assets/images/contact_us.jpg').default} alt="contact" />
                </Col>
                <Col className="contact-us-form p-5" md="6" sm="12">
                    <input className="form-control" type="text" placeholder="Name" />
                    <input className="form-control" type="email" placeholder="Email" />
                    <textarea className="form-control" placeholder="Enter your message here..."
                    rows="5"/>
                    <Button variant="success">Submit</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;
