import React, { useRef, useEffect, useState } from "react";
import "../../lessons/lesson.css";
import { NavLink } from "react-router-dom";

const AccordItemLess = ({ fagItem, onClick, isOpen }) => {
  const itemRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    setItemHeight(isOpen ? itemRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <li className="accardionles-item">
      <button className="accardionles-header" onClick={onClick}>
        {fagItem.q}
      </button>
      <div
        className="accardionles-colop"
        style={{
          height: `${itemHeight}px`,
        }}
      >
        <div className="accardionles-body" ref={itemRef}>
          <p className="accardionles__text">{fagItem.a}</p>
          <div className="button__task">
            <NavLink to={"/video"}>
              <button className="button__video">Видео</button>
            </NavLink>
            <NavLink to={"/task"}>
              <button className="button__video" style={{ marginLeft: "10px" }}>
                Задачи
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AccordItemLess;
