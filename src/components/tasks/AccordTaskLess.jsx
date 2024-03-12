import React, { useRef, useEffect, useState } from "react";
import "../lessons/lesson.css";
import EditCode from "../codeEditor/EditCode";
import { useLesson } from "../../context/LessonContextProvider";
import { color } from "framer-motion";

const AccordTaskLess = ({ fagItem, onClick, isOpen }) => {
  const { sendTask, tasks_user, getTasksUsers } = useLesson();
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("");
  const itemRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("user_answer", userAnswer);
    newLesson.append("status", status);
    let arr = [];
    arr.push(fagItem.title.toLowerCase());
    newLesson.append("task", arr);
    sendTask(newLesson);
  };
  useEffect(() => {
    setItemHeight(isOpen ? itemRef.current.scrollHeight : 0);
    getTasksUsers();
  }, [isOpen]);
  console.log(tasks_user);

  return (
    <li
      className="accardionles-item"
      style={{ backgroundColor: tasks_user.status === "D" ? "green" : null }}
    >
      <button className="accardionles-header" onClick={onClick}>
        {fagItem.title}
      </button>
      <div
        className="accardionles-colop"
        style={{
          height: `${itemHeight}px`,
        }}
      >
        <div className="accardionles-body" ref={itemRef}>
          <p className="accardionles__text">{fagItem.description}</p>
          <EditCode />
          <textarea
            className="addlessons__textfield_small addlessons__textfield"
            placeholder="Описание проекта"
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button
            style={{ color: "black", backgroundColor: "green" }}
            onClick={handleCLick}
          >
            Send
          </button>
        </div>
      </div>
    </li>
  );
};

export default AccordTaskLess;
