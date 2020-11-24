import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// import icons
import { BiLogInCircle } from "react-icons/bi";

// components
import Password from "../Password";

const Login = (props) => {
  return (
    <>
      <h4 style={{ color: "#888" }}>
        <BiLogInCircle className="mx-3" />
        Login
      </h4>
      <Form action="#" className="w-100 p-3">
        <input
          className="form-control my-3"
          type="email"
          placeholder="Email"
          required
        />
        <Password this_id="1" placeholder="Password" />
        <Button className="btn-success my-3" type="submit">
          Login
        </Button>
      </Form>
      <div className="modal-footer">
        <Link className="modal-footer-link" to={"/forgot"}>
          Forogot password
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
