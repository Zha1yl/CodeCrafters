import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProject = ({
  courses,
  editProjects,
  getOneProject,
  oneProject,
  // slug,
}) => {
  const { slug } = useParams();
  console.log(slug);

  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    getOneProject(slug);
  }, []);
  console.log(oneProject);
  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("slug", title);
    newLesson.append("title", title);
    newLesson.append("description", desciption);
    newLesson.append("course", course.toLowerCase());
    newLesson.append("price", price);
    editProjects(newLesson, slug);
  };
  return (
    <>
      <div className="addlessons__bottom">
        <h2 className="adllessons__title">Редактирование проекта</h2>
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
          <svg
            width="25"
            height="25"
            className="addlessons__svg"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1236_1922)">
              <path
                d="M8.01999 9.00006L5.01999 9.54006L5.51999 6.50006L11.25 0.790061C11.343 0.696333 11.4536 0.621938 11.5754 0.57117C11.6973 0.520401 11.828 0.494263 11.96 0.494263C12.092 0.494263 12.2227 0.520401 12.3446 0.57117C12.4664 0.621938 12.577 0.696333 12.67 0.790061L13.73 1.85006C13.8237 1.94302 13.8981 2.05363 13.9489 2.17548C13.9996 2.29734 14.0258 2.42805 14.0258 2.56006C14.0258 2.69207 13.9996 2.82278 13.9489 2.94464C13.8981 3.0665 13.8237 3.1771 13.73 3.27006L8.01999 9.00006Z"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.52 9.5V12.5C12.52 12.7652 12.4146 13.0196 12.2271 13.2071C12.0396 13.3946 11.7852 13.5 11.52 13.5H2.01999C1.75477 13.5 1.50042 13.3946 1.31288 13.2071C1.12535 13.0196 1.01999 12.7652 1.01999 12.5V3C1.01999 2.73478 1.12535 2.48043 1.31288 2.29289C1.50042 2.10536 1.75477 2 2.01999 2H5.01999"
                stroke="#000001"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1236_1922">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0.519989)"
                />
              </clipPath>
            </defs>
          </svg>
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
      <button onClick={handleCLick}>Редактирование проект</button>
    </>
  );
};

export default EditProject;
