import React from "react";
import "./modalWindow.scss";

const ModalWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal__setting modal__setting_first">
          <p className="modal__desc">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
