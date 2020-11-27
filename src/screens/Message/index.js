import React from "react";
import "./style.css";

// components
import Vcard from "../../components/Vcard";

// layouts
import Drawer from "../../layouts/Drawer";

const Message = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Messages</h1>
      </div>
      <Drawer top={<Vcard />} />
    </>
  );
};

export default Message;
