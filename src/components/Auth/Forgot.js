import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// import icons
import { BsQuestionCircle } from "react-icons/bs";

const Login = (props) => {
  return (
    <>
      <h4 style={{ color: "#888" }}>
        <BsQuestionCircle className="mx-3" />
        Forgot Password
      </h4>
      <Form action="#" className="w-100 p-3">
        <input
          className="form-control my-3"
          type="email"
          placeholder="Email"
          required
        />
        <Button className="btn-success my-3" type="submit">
          Submit
        </Button>
      </Form>
      <div className="modal-footer">
        <Link className="modal-footer-link" to={"/login"}>
          Login
        </Link>
        <Link className="modal-footer-link" to={"/register"}>
          Create new account
        </Link>
        <Link className="modal-footer-link" to={"/reset"}>
          Reset password
        </Link>
      </div>
    </>
  );
};

export default Login;
