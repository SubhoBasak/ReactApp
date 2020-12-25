import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

// components
import ShopHeaderPlate from "../../components/ShopHeaderPlate";

// layouts
import CardGrid from "../CardGrid";

const Shop = (props) => {
    if(props.data.get_products.length === 0){
        return <></>
    }

    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col lg="6" md="8" sm="12">
                    <ShopHeaderPlate shop_id={props.data.id} u_name={props.data.u_name}
                                     phone={props.data.phone} address={props.data.address}
                                     image={props.data.image} />
                </Col>
            </Row>
            <CardGrid products={props.data.get_products} />
        </>
    )
}

export default Shop;
