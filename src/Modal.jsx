import React from "react";
import { Link } from "react-router-dom";
function Modal({ closeModal}) {
  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div
            style={{
              display: "inlineBlock",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <h1>Are you sure you want to Place Order?</h1>
          </div>
          {/* <div className="body">
            <h4>myaddress</h4>
          </div> */}
          <div className="footer">
            <Link to="/">
              <button>Continue</button>
            </Link>
            <button className="cancelBtn" onClick={() => closeModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
