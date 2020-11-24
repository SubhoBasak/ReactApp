import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css";

// import icons
import { FaSearch } from "react-icons/fa";

// components
import Vcard from "../../components/Vcard";

// TODO - get data using API
// import testing data
import contacts from "./contacts.json";

const Contacts = () => {
  const contact_list = contacts.map((data) => (
    <Vcard image={data.image} name={data.name} phone={data.phone} />
  ));

  return (
    <>
      <Container fluid className="d-flex ml-md-5 ml-sm-2 mt-3">
        <div style={{ display: "flex" }}>
          <input
            className="form-control mr-2"
            type="text"
            placeholder="Search"
          />
          <Button>
            <FaSearch />
          </Button>
        </div>
      </Container>
      <hr />
      <Container className="p-1">{contact_list}</Container>
    </>
  );
};

export default Contacts;
