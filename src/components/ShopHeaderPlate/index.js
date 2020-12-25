import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { MEDIA_URL } from "../../API/api";
import "./style.css"

// icons
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { VscLocation } from "react-icons/all";

const ShopHeaderPlate = (props) => {
    return (
        <>
            <hr className="mt-5" />
            <h5 className="ml-3 text-secondary">Seller information :</h5>
            <Row>
                <Col md="6" sm="12" className="seller-profile mx-3">
                    <img src={MEDIA_URL+props.image} alt="profile" />
                    <div className="seller-profile-txt text-dark">
                        <p>
                            <Link to={'/profile/'}>
                                <b>{props.u_name}</b>
                            </Link>
                        </p>
                        <p>
                            <FiPhone className="mr-2 text-success" />
                            {props.phone}
                        </p>
                        <p>
                            <VscLocation className="mr-2 text-danger" />
                            {props.address}
                        </p>
                    </div>
                </Col>
                <Col md="4" sm="12" className="view-more-btn">
                    <Button href={"/shop/"+props.shop_id} variant="primary">
                        View more <FiArrowRight />
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default ShopHeaderPlate;
