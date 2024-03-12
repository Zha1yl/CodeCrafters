import React, { useEffect, useState } from "react";
import "./addlessons.scss";
import { useLesson } from "../context/LessonContextProvider";
import { useParams } from "react-router-dom";
import EditProject from "../components/editLessonsItems/EditProject";
import EditTasks from "../components/editLessonsItems/EditTasks";
const EditPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const {
    courses,
    getOneCourses,
    getProjects,
    projects,
    editCourses,
    editProjects,
    editTasks,
    getOneProject,
  } = useLesson();
  const [title, setTitle] = useState(slug);

  const handleCLick = () => {
    const newLesson = new FormData();
    newLesson.append("slug", slug);
    newLesson.append("title", title);
    editCourses(slug, newLesson);
  };
  useEffect(() => {
    getOneCourses();
    getProjects();
  }, []);
  return (
    <div className="addlessons">
      <div className="addlessons__container">
        <div className="addlessons__left">
          <div className="addlessons__top">
            <h2 className="adllessons__title">Редактирование курса</h2>
            <div className="addlessons__item">
              <input
                type="text"
                placeholder="Название курса"
                className="addlessons__textfield_top"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <svg
                className="addlessons__svg"
                width="25"
                height="25"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleCLick}
              >
                <g clip-path="url(#clip0_1236_1954)">
                  <path
                    d="M2.5 5.5V1.5C2.5 1.23478 2.60536 0.98043 2.79289 0.792893C2.98043 0.605357 3.23478 0.5 3.5 0.5H8.5L13.5 5.5V12.5C13.5 12.7652 13.3946 13.0196 13.2071 13.2071C13.0196 13.3946 12.7652 13.5 12.5 13.5H7.5"
                    stroke="#000001"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 0.5V5.5H13.5"
                    stroke="#000001"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 7.5V13.5"
                    stroke="#000001"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.5 10.5H6.5"
                    stroke="#000001"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1236_1954">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <EditProject
            editProjects={editProjects}
            getProjects={getProjects}
            getOneProject={getOneProject}
            courses={courses}
            slug={slug}
          />
        </div>
        <EditTasks
          editTasks={editTasks}
          projects={projects}
          courses={courses}
        />
      </div>
    </div>
  );
};

export default EditPage;
