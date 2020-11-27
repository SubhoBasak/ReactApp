import React from "react";
import "./style.css";

// TODO - get data from API
// import test data
import categories from "./test_data.json";

// import components
import QuickLink from "../../components/QuickLink";

const QuickAccess = () => {
  let quick_links = categories.map((data) => <QuickLink data={data} />);

  return <div className="quick-access">{quick_links}</div>;
};

export default QuickAccess;
