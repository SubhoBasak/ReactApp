import React from "react";
import { Link } from "react-router-dom";

const QuickLink = ({ data }) => {
  return (
    <Link className="quick-link" to={"/market/" + data.category}>
      {data.category}
    </Link>
  );
};

export default QuickLink;
