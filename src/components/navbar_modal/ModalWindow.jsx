import React from "react";
import "./modalWindow.scss";
import { useNavigate } from "react-router-dom";

const ModalWindow = ({ isOpen, onClose, windowWidth, toggleTheme }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {windowWidth < 951 ? (
          <div className="modal__setting modal__setting_first">
            <div className="modal__search">
              <div className="modal__search_icon">
                <svg
                  className=""
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1236_3882)">
                    <path
                      d="M5.92 11.34C8.91338 11.34 11.34 8.91338 11.34 5.92C11.34 2.92662 8.91338 0.5 5.92 0.5C2.92662 0.5 0.5 2.92662 0.5 5.92C0.5 8.91338 2.92662 11.34 5.92 11.34Z"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 13.5L9.75 9.75"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1236_3882">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                className="modal__input"
                placeholder="Search 10,700+ tutorials"
              />
            </div>
          </div>
        ) : null}
        <div className="modal__setting">
          <p className="modal__desc">Profile</p>
        </div>
        <div className="modal__setting" onClick={navigate("/donate")}>
          <p className="modal__desc">Donat</p>
        </div>
        {/* при адаптиве в бургер меню появляются доп пункты */}
        {windowWidth < 450 ? (
          <>
            <div className="modal__setting" onClick={toggleTheme}>
              <p className="modal__desc">Dark Theme</p>
            </div>
            <div className="modal__setting">
              <p className="modal__desc">Change Language</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ModalWindow;
