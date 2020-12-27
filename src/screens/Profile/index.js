import React from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import {MEDIA_URL, profile_details} from "../../API/api";
import "./style.css";

// import icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { VscLocation } from "react-icons/vsc";

const Profile = (props) => {
  const [profile, setProfile] = React.useState({})
  let pid = useParams().pid
  if(props.pid){
    pid = props.pid
  }

  React.useEffect(() => {
    profile_details(pid, setProfile)
  }, [pid])

  return (
    <>
      <div className="cover">
        <img
          className="cover-img"
          src={MEDIA_URL+profile.cover}
          alt="cover"
        />
        <Row className="profile-info mt-3 p-2">
          <div className="profile-img-div col-md-3 col-sm-12">
            <img src={MEDIA_URL+profile.image} alt="profile" />
          </div>
          <div className="col-md-9 col-sm-12">
            <h2>{profile.u_name}</h2>
            <ul className="user-details">
              <li className="text-primary">
                <FiPhone /> Phone: {profile.phone}
              </li>
              <li className="text-success">
                <HiOutlineMail /> Email: {profile.u_email}
              </li>
              <li className="text-warning">
                <VscLocation /> Address: {profile.address}
              </li>
              <li className="text-danger">
                <VscLocation /> Pincode: {profile.pincode}
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Profile;
