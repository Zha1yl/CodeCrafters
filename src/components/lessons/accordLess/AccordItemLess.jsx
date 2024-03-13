import React, { useRef, useEffect, useState } from "react";
import "../../lessons/lesson.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useLesson } from "../../../context/LessonContextProvider";

const AccordItemLess = ({ project, onClick, isOpen }) => {
  const { deleteProjects, editProjects, byeProject } = useLesson();
  const itemRef = useRef(null);
  // console.log(project);
  const [itemHeight, setItemHeight] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setItemHeight(isOpen ? itemRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <li className="accardionles-item">
      <button className="accardionles-header" onClick={onClick}>
        {project.title}
      </button>
      <div
        className="accardionles-colop"
        style={{
          height: `${itemHeight}px`,
        }}
      >
        <div className="accardionles-body" ref={itemRef}>
          <p className="accardionles__text">{project.description}</p>
          <button
            className="accardionles-header"
            onClick={() => {
              navigate(`/edit/${project.title.toLowerCase()}`);
            }}
          >
            EDIT
          </button>
          <button
            className="accardionles-header"
            onClick={() => {
              deleteProjects(project.title.toLowerCase());
            }}
          >
            DELETE
          </button>
          <div className="button__task">
            <NavLink to={"/video"}>
              <button className="button__video">Видео</button>
            </NavLink>
            <NavLink to={"/tasks"}>
              <button className="button__video" style={{ marginLeft: "10px" }}>
                Задачи
              </button>
            </NavLink>
            <button
              className="accardionles-header"
              onClick={() => byeProject(project.title.toLowerCase())}
            >
              купить {project.price}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AccordItemLess;
