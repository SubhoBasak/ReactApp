import React from "react";
import "./style.css";

// components
import Unselect from "../../components/Unselect";
import Vcard from "../../components/Vcard";

// layouts
import Drawer from "../../layouts/Drawer";

// screens
import Order from "../Order";
import Profile from "../Profile";

const Orders = () => {
  const [bottomView, setBottomView] = React.useState(0);
  console.log(bottomView);

  let bottom_view = <Unselect />;
  if (bottomView === 1) {
    bottom_view = <Order />;
  } else if (bottomView === 2) {
    bottom_view = <Profile />;
  }

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Messages</h1>
      </div>
      <Drawer
        top={
          <Vcard
            set_order_view={() => setBottomView(1)}
            set_profile_view={() => setBottomView(2)}
          />
        }
        bottom={bottom_view}
      />
    </>
  );
};

export default Orders;
