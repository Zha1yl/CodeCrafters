import React, { useState } from "react";

const CreateProject = ({ courses, createProject }) => {
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("");

  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("title", title);
    newLesson.append("description", desciption);
    newLesson.append("course", course.toLowerCase());
    newLesson.append("price", price);
    createProject(newLesson);
  };
  return (
    <>
      <div className="addlessons__bottom">
        <h2 className="adllessons__title">Создание проекта</h2>
        <div className="addlessons__item">
          <input
            type="text"
            placeholder="Название проекта"
            className="addlessons__textfield"
            onChange={(e) => setTitle(e.target.value)}
          />
          <svg
            className="addlessons__svg"
            width="25"
            height="25"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.5V13.5"
              stroke="#000001"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 13.5H9.5"
              stroke="#000001"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 3V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H11.5C11.7652 0.5 12.0196 0.605357 12.2071 0.792893C12.3946 0.98043 12.5 1.23478 12.5 1.5V3"
              stroke="#000001"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="addlessons__item">
          <textarea
            className="addlessons__textfield_small addlessons__textfield"
            placeholder="Описание проекта"
            onChange={(e) => setDesciption(e.target.value)}
          />
          <svg
            width="25"
            height="25"
            className="addlessons__svg"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1236_2599)">
              <path
                d="M13.5 1H5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 4H0.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 7H0.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 13H0.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 10H0.5"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1236_2599">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="addlessons__item">
          <select
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
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>Выберите курс</option>
            {courses?.map((elem, index) => (
              <option key={index}>{elem.title}</option>
            ))}
          </select>
        </div>
        <div className="addlessons__item">
          <input
            type="number"
            placeholder="Цена проекта"
            className="addlessons__textfield"
            onChange={(e) => setPrice(e.target.value)}
          />
          <svg
            width="25"
            height="25"
            className="addlessons__svg"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1236_17600)">
              <path
                d="M9 8C11.4853 8 13.5 7.10457 13.5 6C13.5 4.89543 11.4853 4 9 4C6.51472 4 4.5 4.89543 4.5 6C4.5 7.10457 6.51472 8 9 8Z"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 6V12C4.5 13.1 6.5 14 9 14C11.5 14 13.5 13.1 13.5 12V6"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 9C13.5 10.1 11.5 11 9 11C6.5 11 4.5 10.1 4.5 9"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.9 1.99999C7.73149 1.27886 6.37133 0.930103 5 0.999987C2.51 0.999987 0.5 1.89999 0.5 2.99999C0.5 3.58999 1.08 4.11999 2 4.49999"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 10.5C1.08 10.12 0.5 9.59 0.5 9V3"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 7.5C1.08 7.12 0.5 6.59 0.5 6"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1236_17600">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
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
        Создать проект
      </button>
    </>
  );
};

export default CreateProject;
