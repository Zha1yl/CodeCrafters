import React, { useState } from "react";

const CreateTask = ({ courses, createTasks, projects }) => {
  const [titleTask, setTitleTask] = useState("");
  const [desciptionTask, setDesciptionTask] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");

  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("course", category.toLowerCase());
    newLesson.append("title", titleTask);
    newLesson.append("description", desciptionTask);
    newLesson.append("correct_answer", correctAnswer);
    newLesson.append("project", project.toLowerCase());
    createTasks(newLesson);
  };
  return (
    <>
      <div className="addlessons__right">
        <h2 className="addlessons__title">Создание ТЗ</h2>
        <div className="addlessons__item">
          <select
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "16px",
              borderRadius: "5px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              width: "100%",
              outline: "none",
              color: "#fff",
            }}
          >
            <option>Выбор курса</option>
            {courses?.map((elem, index) => (
              <option key={index}>{elem.title}</option>
            ))}
          </select>
          <select
            onChange={(e) => setProject(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "16px",
              borderRadius: "5px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              width: "100%",
              outline: "none",
              color: "#fff",
            }}
          >
            <option>Выбор проекта</option>
            {projects.results?.map((elem, index) => (
              <option key={index}>{elem.title}</option>
            ))}
          </select>
          <input
            placeholder="Название задачи"
            className="addlessons__textfield1"
            type="text"
            onChange={(e) => setTitleTask(e.target.value)}
          />
          <textarea
            className="addlessons__textfield_big"
            style={{ marginBottom: "30px" }}
            placeholder="Введите ТЗ"
            onChange={(e) => setDesciptionTask(e.target.value)}
          />
          <textarea
            className="addlessons__textfield_big"
            style={{ marginBottom: "15px" }}
            placeholder="Введите ответ ТЗ"
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1c1c25",
            width: "auto",
            padding: "0 5px",
            height: "30px",
            borderRadius: "4px",
          }}
          onClick={handleCLick}
        >
          Создать таск
        </button>
      </div>
    </>
  );
};

export default CreateTask;
