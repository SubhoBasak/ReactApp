import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import { Modal } from "react-bootstrap";

// components
import Forgot from "./Forgot";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const Auth = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            src="/assets/images/favicon.ico"
            width={30}
            height={30}
            className="mr-2"
            alt="Logo"
          />
          Market
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HashRouter hashType="noslash" basename="/">
          <Route exact path="">
            <Redirect to="login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />
        </HashRouter>
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
