import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// import icons
import { IoMdCreate } from "react-icons/io";

// components
import Password from "../Password";

const Login = () => {
  return (
    <>
      <h4 style={{ color: "#888" }}>
        <IoMdCreate className="mx-3" />
        Register
      </h4>
      <div className="w-100 p-3">
        <input
          className="form-control my-3"
          type="email"
          placeholder="Email"
          required
        />
        <Password this_id="1" placeholder="Password" />
        <Password this_id="2" placeholder="Re-type password" />
        <Button className="btn-success my-3" type="submit">
          Register
        </Button>
      </div>
      <div className="modal-footer">
        <Link className="modal-footer-link" to={"/login"}>
          Login
        </Link>
        <Link className="modal-footer-link" to={"/reset"}>
          Reset password
        </Link>
      </div>
    </>
  );
};

export default Login;
