import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import icons
import { GiBreakingChain } from "react-icons/gi";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <img src="/assets/images/broken.png" alt="Icon" />
        <br />
        <GiBreakingChain className="not-found-icon mr-2 text-dark" />
        <h1>
          <span className="text-warning">404</span>
          <br />
          Not Found
        </h1>
        <Link to="/">Return to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
