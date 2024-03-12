import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { getConfig } from "../helpers/functions";
import axios from "axios";
import { API_COURSES } from "../helpers/api";
const lessonContext = createContext();
export const useLesson = () => useContext(lessonContext);
const INIT_STATE = {
  courses: [],
  oneCourses: {},
  projects: [],
  oneProject: {},
  tasks: [],
  tasks_user: {},
  status_task: {},
  pages: 5,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return { ...state, courses: action.payload };
    case "GET_ONE_COURSES":
      return { ...state, oneCourses: action.payload };
    case "GET_PROJECTS":
      return { ...state, projects: action.payload };
    case "GET_TASKS":
      return { ...state, tasks: action.payload };
    case "GET_TASKS-USER":
      return { ...state, tasks_user: action.payload };
    case "GET_ONE_PROJECT":
      return { ...state, oneProject: action.payload };
    case "GET_TASKS_RESULT":
      return { ...state, status_task: action.payload };
  }
};

const LessonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  // ! GET COURSES
  const getCourses = async () => {
    setTimeout(async () => {
      try {
        const { data } = await axios(`${API_COURSES}/courses/`, getConfig());
        dispatch({
          type: "GET_COURSES",
          payload: data.results,
        });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }, 2000);
  };

  //! GET_ONE_COURSES
  const getOneCourses = async (slug) => {
    try {
      const formData = new FormData();
      formData.append("slug", slug.toLowerCase());
      const { data } = await axios(
        `${API_COURSES}/courses/${slug.toLowerCase()}/`,
        getConfig()
      );
      dispatch({
        type: "GET_ONE_COURSES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! DELETE COURSES
  const deleteCourses = async (slug) => {
    try {
      await axios.delete(`${API_COURSES}/courses/${slug}/`, getConfig());
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  //! CREATE COURSES
  const createCourses = async (newLesson) => {
    await axios.post(`${API_COURSES}/courses/`, newLesson, getConfig());
    getCourses();
  };

  //! GET PROJECTS
  const getProjects = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/projects/`, getConfig());
      dispatch({
        type: "GET_PROJECTS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! CREATE PROJECT
  const createProject = async (newLesson) => {
    await axios.post(`${API_COURSES}/projects/`, newLesson, getConfig());
    // getProjects();
  };

  //! DELETE PROJECTS
  const deleteProjects = async (slug) => {
    try {
      await axios.delete(`${API_COURSES}/projects/${slug}/`, getConfig());
      getProjects();
    } catch (error) {
      console.log(error);
    }
  };

  //! CREATE TASKS
  const createTasks = async (newLesson) => {
    await axios.post(`${API_COURSES}/tasks/`, newLesson, getConfig());
  };

  //! SEND TASK
  const sendTask = async (newLesson) => {
    const { data } = await axios.post(
      `${API_COURSES}/tasks-user/`,
      newLesson,
      getConfig()
    );
    dispatch({
      type: "GET_TASKS_RESULT",
      payload: data,
    });
  };

  //! GET TASKS
  const getTasks = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/tasks/`, getConfig());
      dispatch({
        type: "GET_TASKS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! GET TASKS-USERS
  const getTasksUsers = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/tasks-user/`, getConfig());

      dispatch({
        type: "GET_TASKS-USER",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! EDIT COURSES
  const editCourses = async (slug, newLesson) => {
    try {
      await axios.patch(
        `${API_COURSES}/courses/${slug}/`,
        newLesson,
        getConfig()
      );
      navigate("/");
    } catch (error) {}
  };

  //! GET_ONE_PROJECT
  const getOneProject = async (slug) => {
    try {
      const formData = new FormData();
      formData.append("slug", slug.toLowerCase());
      const { data } = await axios(
        `${API_COURSES}/projects/${slug.toLowerCase()}/`,
        getConfig()
      );
      dispatch({
        type: "GET_ONE_PROJECT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! EDIT PROJECTS
  const editProjects = async (slug, newLesson) => {
    try {
      await axios.patch(
        `${API_COURSES}/projects/${slug}/`,
        newLesson,
        getConfig()
      );
      navigate("/js");
    } catch (error) {}
  };
  //! EDIT TASKS
  const editTasks = async (slug, newLesson) => {
    try {
      await axios.patch(
        `${API_COURSES}/tasks/${slug}/`,
        newLesson,
        getConfig()
      );
      navigate("/tasks");
    } catch (error) {}
  };
  const values = {
    courses: state.courses,
    getCourses,
    createCourses,
    deleteCourses,

    createProject,
    deleteProjects,
    getOneProject,
    oneProject: state.oneProject,

    status_task: state.status_task,

    pages: state.pages,
    getOneCourses,
    oneLesson: state.oneLesson,
    editCourses,
    editProjects,
    editTasks,
    oneCourses: state.oneCourses,
    createTasks,
    getProjects,
    projects: state.projects,
    getTasks,
    tasks: state.tasks,
    sendTask,
    getTasksUsers,
    tasks_user: state.tasks_user,
  };
  return (
    <lessonContext.Provider value={values}>{children}</lessonContext.Provider>
  );
};

export default LessonContextProvider;
