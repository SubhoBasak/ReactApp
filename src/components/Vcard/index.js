import React from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";

// import icons
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";

// TODO - use API
import test_data from "./test_data.json";

const Vcard = (props) => {
  const show_profile = () => {
    if (window.screen.width < 770) {
      window.location.replace(
        window.location.protocol + "//" + window.location.host + "/profile/"
      );
    } else {
      props.set_profile_view();
    }
  };

  const cards = test_data.map((data) => {
    return (
      <div className="vcard">
        <div className="vcard-profile">
          <img src={data.image} alt="profile" />
          <div className="vcard-text">
            <p>{data.name}</p>
            <span>{data.phone}</span>
            <br />
            <span>{data.city}</span>
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
      {cards}
    </>
  );
};

export default Vcard;
