import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import {contact_list, MEDIA_URL} from "../../API/api";
import "./style.css";

// import icons
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Vcard = (props) => {
  const [load, setLoad] = React.useState(false)
  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => {
    contact_list(setContacts, setLoad)
  }, [])

  const show_profile = () => {
    if (window.screen.width < 770) {
      window.location.replace(
        window.location.protocol + "//" + window.location.host + "/profile/"
      );
    } else {
      props.set_profile_view();
    }
  };

  function load_card(){
    if(load){
      if(contacts.detail){
        return (
            <Redirect to={{pathname: '/', state: {login_require: true}}} />
        )
      }
      return contacts.map((data, index) => {
        return (
            <div key={index} className="vcard">
              <div className="vcard-profile">
                <img src={MEDIA_URL+data.image} alt="profile" />
                <div className="vcard-text">
                  <p>{data.u_name}</p>
                  <span>{data.phone}</span>
                  <br />
                  <span>{data.address}</span>
                </div>
              </div>
              <DropdownButton
                  id="dropdown-basic-button"
                  title={<BiDotsVerticalRounded />}
                  variant="light"
              >
                <Dropdown.Item onClick={() => show_profile()}>
                  <FiUser className="mr-2" />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.show_remove_modal()}>
                  <AiOutlineUserDelete className="mr-2" />
                  Remove
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <GoReport className="mr-2" />
                  Report
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.show_block_modal()}>
                  <MdBlock className="mr-2 text-danger" />
                  Block
                </Dropdown.Item>
              </DropdownButton>
            </div>
        );
      });
    }
  }

  return (
    <>
      <div className="vcard-search d-flex w-100 p-2 my-2">
        <input
          className="form-control mr-2"
          type="text"
          placeholder="Search for people..."
        />
        <Button variant="outline-primary">
          <FaSearch />
        </Button>
      </div>
      {load_card()}
    </>
  );
};

export default Vcard;
