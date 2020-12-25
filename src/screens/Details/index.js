import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { MEDIA_URL, product_details } from "../../API/api";
import "./style.css";

// components
import Rating from "../../components/Rating";
import ShopHeaderPlate from "../../components/ShopHeaderPlate";

// import icons
import { TiTickOutline } from "react-icons/ti";

const Details = (props) => {
  const [load, setLoad] = React.useState(false)
  const [details, setDetails] = React.useState({})
  const [top_img, setTopImg] = React.useState(null)
  const pid = useParams().pid

  React.useEffect(() => {
    product_details(pid, setDetails, setLoad)
  }, [pid])

  function set_images() {
    if(load){
      const all_images = details.productimage_set.map((image) => {
        return <img onClick={() => setTopImg(MEDIA_URL+image.image)}
                    src={MEDIA_URL+image.image} alt="product" />
      })
      return all_images
    }
  }

  function set_spec() {
    if(load){
      const all_spec = details.productspecification_set.map((spec, index) => {
        if(index%4 === 0){
          return (
              <li className="text-primary">
                <TiTickOutline /> {spec.spec}
              </li>
          )
        } else if(index%4 === 1){
          return (
              <li className="text-success">
                <TiTickOutline /> {spec.spec}
              </li>
          )
        } else if(index%4 === 2){
          return (
              <li className="text-warning">
                <TiTickOutline /> {spec.spec}
              </li>
          )
        } else {
          return (
              <li className="text-danger">
                <TiTickOutline /> {spec.spec}
              </li>
          )
        }
      })
      return all_spec;
    }
  }

  function set_top_img(image){
    if(top_img){
      return (
          <img
              className="main-img"
              src={top_img}
              alt="product"
          />
      )
    } else if(load){
      return (
          <img
              className="main-img"
              src={MEDIA_URL+details.productimage_set[0].image}
              alt="product"
          />
      )
    }
  }

  function set_user_profile(){
   if(load){
      return (
          <ShopHeaderPlate shop_id={details.user.id} u_name={details.user.u_name}
                              phone={details.user.phone} address={details.user.address}
                              image={details.user.image} />
      )
   }
  }

  function all_colors(){
    if(load){
      const colors = details.productcolor_set.map((color) => {
        return (
            <div className="color-badge" style={{background: color.color}}>
            </div>
        )
      })
      return (
          <div className="color-badge-container">
            {colors}
          </div>
      )
    }
  }

  return (
    <>
      <div className="d-flex w-100 justify-content-center my-5">
        <h1>Product details</h1>
      </div>
      <hr className="bg-primary mx-4" />
      <Row>
        <Col lg="6" md="12" className="img-container">
          <div className="main-img-container">
            {set_top_img()}
          </div>
          <div className="sub-imgs mx-lg-3">
            {set_images()}
          </div>
        </Col>
        <Col lg="6" md="12" className="p-lg-4 p-md-4 product-details-text">
          <h2 className="m-3">{details.name}</h2>
          <h3 className="text-danger m-3">Rs. {details.price}/-</h3>
          <div className="m-3">
            <Rating rate={details.rating} />
            {all_colors()}
          </div>
          <Row className="details-btn mx-3 my-5">
            <Button className="mr-2" variant="primary">
              Order
            </Button>
            <Button variant="success">Message</Button>
          </Row>
          <p className="m-3 text-dark mb-5">
            {details.description}
          </p>
          <ul className="ml-5">
            {set_spec()}
          </ul>
          {set_user_profile()}
        </Col>
      </Row>
    </>
  );
};

export default Details;
