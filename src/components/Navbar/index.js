import React from "react";
import {
  Navbar as NavbarBT,
  Button,
  FormControl,
  Nav,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

// component
import Auth from "../Auth";

// import icons
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

// layouts
import QuickAccess from "../../layouts/QuickAccess";

const Navbar = () => {
  const [authModal, setAuthModal] = React.useState(false);

  return (
    <>
      <NavbarBT bg="light" expand="md" className="navbar">
        <NavbarBT.Brand className="navbar-brand" href="/">
          <img
            src={require("../../assets/images/favicon.png").default}
            width={32}
            height={32}
            className="mr-2 text-dark"
            alt="brand logo"
          />
          SNBMarket
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-NavbarBT-nav" />
        <NavbarBT.Collapse
          className="justify-content-end"
          id="basic-NavbarBT-nav"
        >
          <Nav className="mr-auto">
            <NavLink
              to="/market/"
              className="pt-md-2 pt-3 pl-md-2 pl-4 px-2 text-dark"
            >
              Market
            </NavLink>
            <NavLink
              to="/orders/"
              className="pt-md-2 pt-3 pl-md-2 pl-4 px-2 text-dark"
            >
              Orders
              <Badge pill variant="danger" className="ml-1">
                2
              </Badge>
            </NavLink>
            <NavDropdown
              className="pt-md-0 pt-3 pl-md-2 pl-4"
              title="My Account"
              id="basic-nav-dropdown"
              style={{ zIndex: 5000 }}
            >
              <NavLink to="/profile/" className="dropdown-item text-dark">
                <FiUser className="mr-2" />
                Profile
              </NavLink>
              <NavLink to="/settings/" className="dropdown-item text-dark">
                <AiOutlineSetting className="mr-2" />
                Settings
              </NavLink>
              <NavDropdown.Item
                onClick={() => {
                  setAuthModal(true);
                }}
              >
                <BiLogOutCircle className="mr-2 text-danger" />
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex py-md-0 py-2">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-primary">
              <FaSearch />
            </Button>
          </div>
        </NavbarBT.Collapse>
      </NavbarBT>
      <QuickAccess />
      <Auth
        show={authModal}
        onHide={() => {
          setAuthModal(false);
        }}
      />
    </>
  );
};

export default Navbar;
