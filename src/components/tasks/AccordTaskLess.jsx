import React, { useRef, useEffect, useState } from "react";
import "../lessons/lesson.css";
import EditCode from "../codeEditor/EditCode";
import { useLesson } from "../../context/LessonContextProvider";

const AccordTaskLess = ({ task, onClick, isOpen }) => {
  const { sendTask, tasks_user, getTasksUsers, status_task } = useLesson();
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("");
  const itemRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("user_answer", userAnswer);
    newLesson.append("status", status);
    newLesson.append("task", task.title.toLowerCase());
    sendTask(newLesson);
  };
  useEffect(() => {
    setItemHeight(isOpen ? itemRef.current.scrollHeight : 0);
    // getTasksUsers();
  }, [isOpen, status_task]);
  console.log(tasks_user);
  console.log(status_task.status);
  return (
    <li
      className="accardionles-item"
      style={{
        backgroundColor: `${
          status_task.status === "D" ? "green" : ""
        } !important`,
      }}
    >
      <button className="accardionles-header" onClick={onClick}>
        {task.title}
      </button>
      <div
        className="accardionles-colop"
        style={{
          height: `${itemHeight}px`,
        }}
      >
        <div className="accardionles-body" ref={itemRef}>
          <p className="accardionles__text">{task.description}</p>
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
