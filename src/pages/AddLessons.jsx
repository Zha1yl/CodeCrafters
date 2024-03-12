import React, { useEffect, useState } from "react";
import "./addlessons.scss";
import { useLesson } from "../context/LessonContextProvider";
import CreateProject from "../components/addLessonsItems/CreateProject";
import CreateTask from "../components/addLessonsItems/CreateTask";
const AddLessons = () => {
  const {
    createCourses,
    getCourses,
    courses,
    createProject,
    createTasks,
    getProjects,
    projects,
  } = useLesson();

  useEffect(() => {
    getCourses();
    getProjects();
  }, []);

  const [title, setTitle] = useState("");
  const [lightTheme, setLightTheme] = useState("");
  const [darkTheme, setDarkTheme] = useState("");

  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("title", title);
    newLesson.append("image_light", lightTheme);
    newLesson.append("image_dark", darkTheme);
    createCourses(newLesson);
  };
  return (
    <div className="addlessons">
      <div className="addlessons__container">
        <div className="addlessons__left">
          <div className="addlessons__top">
            {/* // ! создание курса */}
            <h2 className="adllessons__title">Создать курс</h2>
            <div className="addlessons__item">
              <input
                type="text"
                placeholder="Название курса"
                className="addlessons__textfield_top"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                onClick={handleCLick}
                style={{
                  position: "absolute",
                  right: "3px",
                  top: "5px",
                  color: "#fff",
                  backgroundColor: "#1c1c25",
                  width: "90px",
                  height: "30px",
                  borderRadius: "4px",
                }}
              >
                Добавить
              </button>
            </div>
            <div className="addlessons__file">
              <div className="addlessons_file_input">
                <input
                  type="file"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setLightTheme(e.target.files[0])}
                />
                <input
                  type="file"
                  onChange={(e) => setDarkTheme(e.target.files[0])}
                />
              </div>
            </div>
            {/* // ! создание курса */}
          </div>
          {/* // ! создание проекта */}
          <CreateProject courses={courses} createProject={createProject} />
          {/* // ! создание проекта */}
        </div>
        {/* // ! создание тасков */}
        <CreateTask
          courses={courses}
          createTasks={createTasks}
          projects={projects}
        />
        {/* // ! создание тасков */}
      </div>
    </div>
  );
};

export default AddLessons;
