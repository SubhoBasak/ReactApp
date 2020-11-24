import React from "react";
import "./style.css";

// import icons
import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

const Display = (props) => {
  return (
    <div className="display-selector">
      <button
        id="layout_0"
        onClick={() => {
          props.layout_0();
          document
            .getElementById("layout_0")
            .style.setProperty("background", "#f0f0f0");
          document
            .getElementById("layout_1")
            .style.setProperty("background", "#fff");
        }}
      >
        <FiGrid />
      </button>
      <button
        id="layout_1"
        onClick={() => {
          props.layout_1();
          document
            .getElementById("layout_0")
            .style.setProperty("background", "#fff");
          document
            .getElementById("layout_1")
            .style.setProperty("background", "#f0f0f0");
        }}
      >
        <FaList />
      </button>
    </div>
  );
};

export default Display;
