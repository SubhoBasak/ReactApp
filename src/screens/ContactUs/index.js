import React from "react"
import {Row, Col, Button, Alert} from "react-bootstrap"
import { contact_us } from "../../API/api"
import "./style.css"

const ContactUs = () => {
    const [res_cb, setResCb] = React.useState(null)
    const [name_ip, setName] = React.useState('')
    const [email_ip, setEmail] = React.useState('')
    const [message_ip, setMessage] = React.useState('')

    function send_message(){
        const data = {name: name_ip, email: email_ip, message: message_ip}
        console.log(data)
        console.log(JSON.stringify(data))
        contact_us(data, setResCb)
    }

    function show_response(){
        if(res_cb !== null){
            if(res_cb){
                return (
                    <Alert variant="success">
                        Message send successfully. We will check it soon. Thank you being with us.
                    </Alert>
                )
            }
            else{
                return (
                    <Alert variant="danger">
                        Something went wrong! Please check your input values.
                    </Alert>
                )
            }
        }
    }

    return (
        <div>
            <div className="d-flex w-100 justify-content-center my-5">
                <h1>Contact Us</h1>
            </div>
            {show_response()}
            <Row>
                <Col md="6" sm="12">
                    <img className="contact-us-img" src={require('../../assets/images/contact_us.jpg').default} alt="contact" />
                </Col>
                <Col className="contact-us-form p-5" md="6" sm="12">
                    <input className="form-control" type="text" placeholder="Name"
                           onChange={(data) => setName(data.target.value)} />
                    <input className="form-control" type="email" placeholder="Email"
                           onChange={(data) => setEmail(data.target.value)} />
                    <textarea className="form-control" placeholder="Enter your message here..."
                    rows="5" onChange={(data) => setMessage(data.target.value)} />
                    <Button variant="success" onClick={send_message}>Submit</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;
