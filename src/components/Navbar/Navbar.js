import React from "react";
import {
  Navbar as NavbarBT,
  Form,
  Button,
  FormControl,
  Nav,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import "./style.css";

// component
import Auth from "../Auth";

// import icons
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
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
            src="/assets/images/favicon.ico"
            width={30}
            height={30}
            className="mr-2"
          />
          Market
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-NavbarBT-nav" />
        <NavbarBT.Collapse
          className="justify-content-end"
          id="basic-NavbarBT-nav"
        >
          <Nav className="mr-auto">
            <Nav.Link href="/market/">Market</Nav.Link>
            <Nav.Link href="/message/">
              Message
              <Badge pill variant="danger" className="ml-1">
                2
              </Badge>
            </Nav.Link>
            <Nav.Link href="/order/">Orders</Nav.Link>
            <NavDropdown
              title="My Account"
              id="basic-nav-dropdown"
              style={{ zIndex: 5000 }}
            >
              <NavDropdown.Item href="/profile/">
                <FiUser className="mr-2" />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/contacts/">
                <RiContactsLine className="mr-2" />
                Contacts
              </NavDropdown.Item>
              <NavDropdown.Item href="/settings/">
                <AiOutlineSetting className="mr-2" />
                Settings
              </NavDropdown.Item>
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">
              <FaSearch />
            </Button>
          </Form>
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
