import React from "react";
import {all_categories} from "../../API/api"
import "./style.css";

// TODO - get data from API
// import test data
// import categories from "./test_data.json";

// components
import QuickLink from "../../components/QuickLink";

const QuickAccess = () => {
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    all_categories(setCategories)
  }, [])

  let quick_links = categories.map((data, index) => <QuickLink key={index} data={data} />);

  return <div className="quick-access">{quick_links}</div>;
};

export default QuickAccess;
