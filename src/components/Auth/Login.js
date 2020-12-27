import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { login } from "../../API/api";

// import icons
import { BiLogInCircle } from "react-icons/bi";

// components
import Password from "../Password";

const Login = (props) => {
    const [email_ip, setEmail] = React.useState(null)
    const [password_ip, setPassword] = React.useState(null)
    const [login_status, setLoginStatus] = React.useState(null)

    function login_now(){
        login({email: email_ip, password: password_ip},
            setLoginStatus)
    }

    if(login_status) {
        if (login_status === 203) {
            setLoginStatus(null)
            alert('Email and password does not match!')
        } else if (login_status === 404) {
            setLoginStatus(null)
            alert('Can\'t find any account with this email!')
        } else {
            setLoginStatus(null)
            alert(login_status.key)
        }
    }

  return (
    <>
      <h4 style={{ color: "#888" }}>
        <BiLogInCircle className="mx-3" />
        Login
      </h4>
      <div className="w-100 p-3">
        <input
          className="form-control my-3"
          type="email"
          placeholder="Email"
          onChange={data => setEmail(data.target.value)}
          required
        />
        <Password this_id="1" placeholder="Password"
                  onChange={setPassword}
        />
        <Button className="btn-success my-3" type="submit"
                onClick={login_now}
        >
          Login
        </Button>
      </div>
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
