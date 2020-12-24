import React from "react";
import { Row, Col, Button } from "react-bootstrap"

const Report = () => {
    return (
        <>
            <div className="d-flex w-100 justify-content-center my-5">
                <h1>Report</h1>
            </div>
            <Row>
                <Col md="6" sm="12">
                    <img className="contact-us-img" src={require('../../assets/images/report.jpg').default}
                         alt="report" />
                </Col>
                <Col className="contact-us-form p-5" md="6" sm="12">
                    <textarea className="form-control" placeholder="Enter your complain here..."
                              rows="5"/>
                    <div className="custom-file m-2">
                        <input type="file" className="custom-file-input"
                               accept=".png, .jpg, .jpeg, .mp4, .mp3, .wav, .pdf, .docx" />
                        <label className="custom-file-label" htmlFor="validatedCustomFile">Any attachment...</label>
                    </div>
                    <Button variant="danger">Submit</Button>
                </Col>
            </Row>
        </>
    )
}

export default Report
