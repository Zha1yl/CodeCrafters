import React, { useState } from "react";

const EditTasks = ({ courses, editTasks, projects }) => {
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
    editTasks(newLesson);
  };
  return (
    <>
      <div className="addlessons__right">
        <h2 className="addlessons__title">Создание ТЗ</h2>
        <div className="addlessons__item">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>Выбрать курса</option>
            {courses?.map((elem, index) => (
              <option key={index}>{elem.title}</option>
            ))}
          </select>
          <select onChange={(e) => setProject(e.target.value)}>
            <option>Выбрать проекта</option>
            {projects.results?.map((elem, index) => (
              <option key={index}>{elem.title}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Название задачи"
            onChange={(e) => setTitleTask(e.target.value)}
          />
          <textarea
            className="addlessons__textfield_big"
            placeholder="Введите ТЗ"
            onChange={(e) => setDesciptionTask(e.target.value)}
          />
          <textarea
            className="addlessons__textfield_big"
            placeholder="Введите ответ ТЗ"
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button onClick={handleCLick}>Редактировать проект</button>
      </div>
    </>
  );
};

export default EditTasks;
