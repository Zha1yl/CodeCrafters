import React, { useEffect, useState } from "react";
import { useLesson } from "../context/LessonContextProvider";
import TaskAccord from "../components/tasks/TaskAccord";
import { NavLink } from "react-router-dom";

const TasksPage = () => {
  const { tasks, getTasks } = useLesson();
  useEffect(() => {
    getTasks();
  }, []);
  console.log(tasks);

  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <div className="container_lesson">
      <div className="algoritm">
        <div className="algoritm__text">ТАСКИ</div>
      </div>
      <TaskAccord faglist={tasks} />
    </div>
  );
};

export default TasksPage;
