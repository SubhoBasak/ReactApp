import React from "react";

// import icons
import { BsLock, BsUnlock } from "react-icons/bs";

const Password = (props) => {
  const [showPswd, setShowPswd] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "2rem",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <input
        id={props.this_id}
        className="password-inp form-control my-3"
        type="password"
        placeholder={props.placeholder}
      />
      <button
        className="password-btn text-dark"
        style={{
          position: "absolute",
          right: "3rem",
          background: "none",
          border: "none",
          outline: "none",
        }}
        onClick={() => {
          if (showPswd === false) {
            setShowPswd(true);
            document.getElementById(props.this_id).type = "text";
          } else {
            setShowPswd(false);
            document.getElementById(props.this_id).type = "password";
          }
        }}
      >
        {showPswd ? <BsUnlock className="m-2" /> : <BsLock className="m-2" />}
      </button>
    </div>
  );
};

export default Password;
