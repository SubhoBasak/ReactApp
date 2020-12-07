import React from "react";
import { Modal, Button } from "react-bootstrap";
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
  const [modalView, setModalView] = React.useState([false, ""]);

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
            show_remove_modal={() => setModalView([true, "remove"])}
            show_block_modal={() => setModalView([true, "block"])}
          />
        }
        bottom={bottom_view}
      />
      <Modal show={modalView[0]} onHide={() => setModalView([false, ""])}>
        <Modal.Header closeButton>
          <Modal.Title className="">{modalView[1]} merchant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {modalView[1]} this merchant?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => console.log("merchant removed")}
          >
            Yes
          </Button>
          <Button variant="secondary" onClick={() => setModalView([false, ""])}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Orders;
