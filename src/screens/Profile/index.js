import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";

// import icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { VscLocation } from "react-icons/vsc";

const Profile = () => {
  return (
    <>
      <div className="cover">
        <img
          className="cover-img"
          src="https://picsum.photos/880/240"
          alt="cover"
        />
        <Row className="profile-info mt-3 p-2">
          <div className="profile-img-div col-md-3 col-sm-12">
            <img src="https://picsum.photos/300" alt="profile" />
          </div>
          <div className="col-md-9 col-sm-12">
            <h2>Subho Basak</h2>
            <ul className="user-details">
              <li className="text-primary">
                <FiPhone /> Phone: 798662861
              </li>
              <li className="text-success">
                <HiOutlineMail /> Email: subhobasak50@gmail.com
              </li>
              <li className="text-warning">
                <VscLocation /> Address: Dhatrigram
              </li>
              <li className="text-danger">
                <VscLocation /> Pincode: 713405
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Profile;
