import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// import icons
import { BiReset } from "react-icons/bi";

// component
import Password from "../Password";

const Login = (props) => {
  return (
    <>
      <h4 style={{ color: "#888" }}>
        <BiReset className="mx-3" />
        Reset Password
      </h4>
      <Form className="w-100 p-3">
        <input className="form-control my-3" type="email" placeholder="Email" />
        <Password this_id="1" placeholder="Old password" />
        <Password this_id="2" placeholder="New password" />
        <Password this_id="3" placeholder="Re-type new password" />
        <Button className="btn-success my-3" type="submit">
          Reset
        </Button>
      </Form>
      <div className="modal-footer">
        <Link className="modal-footer-link" to={"/login"}>
          Login
        </Link>
        <Link className="modal-footer-link" to={"/register"}>
          Create new account
        </Link>
      </div>
    </>
  );
};

export default Login;
