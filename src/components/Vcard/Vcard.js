import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./style.css";

// import icons
import { FiUser } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { GoReport } from "react-icons/go";

const Vcard = (props) => {
  return (
    <div className="v-card">
      <img src={props.image} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.phone}</p>
      </div>
      <Dropdown as={ButtonGroup} className="p-2">
        <Button variant="primary">Message</Button>

        <Dropdown.Toggle
          split
          variant="light"
          id="dropdown-split-basic"
          className="border border-primary text-dark"
        />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <FiUser className="mr-1" />
            Profile
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <AiOutlineUserDelete className="mr-1" />
            Remove
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <GoReport className="mr-1" />
            Report
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            <MdBlock className="mr-1" />
            Block
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Vcard;
