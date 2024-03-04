import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__left">
        <div className="nav__search">
          <div className="nav__search_icon">
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
            className="nav__input"
            placeholder="Search 10,700+ tutorials"
          />
        </div>
        <div className="nav__project-name">
          <h2 className="nav__title">FreeCodeCamp</h2>
          <div className="nav__title_icon"></div>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__theme nav__box">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1236_3352)">
              <path
                d="M7.75 10.25C9.54493 10.25 11 8.79493 11 7C11 5.20507 9.54493 3.75 7.75 3.75C5.95507 3.75 4.5 5.20507 4.5 7C4.5 8.79493 5.95507 10.25 7.75 10.25Z"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 0.5V1.5"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 12.5V13.5"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.25 7H13.25"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.25 7H1.25"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.35 2.40002L11.64 3.11002"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.85999 10.89L3.14999 11.6"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.35 11.6L11.64 10.89"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.85999 3.11002L3.14999 2.40002"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1236_3352">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0.75)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="nav__planet nav__box">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 7.5H14"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 7.5C9.8772 9.87699 9.00168 12.1533 7.5 14C5.99832 12.1533 5.1228 9.87699 5 7.5C5.1228 5.12301 5.99832 2.84665 7.5 1C9.00168 2.84665 9.8772 5.12301 10 7.5V7.5Z"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav__menu nav__box">
          <p className="nav__box_text">Menu</p>
        </div>
        <div className="nav__sign-in nav__box">
          <p className="nav__box_text">Sign in</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
