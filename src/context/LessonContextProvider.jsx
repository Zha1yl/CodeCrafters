import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { getConfig } from "../helpers/functions";
import axios from "axios";
import { API_COURSES } from "../helpers/api";
const lessonContext = createContext();
export const useLesson = () => useContext(lessonContext);
const INIT_STATE = {
  lessons: [],
  oneCourses: {},
  categories: [],
  projects: [],
  tasks: [],
  tasks_user: [],
  pages: 5,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_LESSONS":
      return { ...state, lessons: action.payload };
    case "GET_ONE_COURSES":
      return { ...state, oneCourses: action.payload };
    case "GET_PROJECTS":
      return { ...state, projects: action.payload };
    case "GET_TASKS":
      return { ...state, tasks: action.payload };
    case "GET_TASKS-USER":
      return { ...state, tasks_user: action.payload };
  }
};
const LessonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const getCategories = async () => {
    const { data } = await axios(`${API_COURSES}/courses/`, getConfig());
    dispatch({
      type: "GET_CATEGORIES",
      payload: data.results,
    });
  };
  //! GET
  const getLessons = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/courses/`, getConfig());
      dispatch({
        type: "GET_LESSONS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! CREATE
  const createLesson = async (newLesson) => {
    await axios.post(`${API_COURSES}/courses/`, newLesson, getConfig());
  };
  //! CREATE PROJECT
  const createProject = async (newLesson) => {
    await axios.post(`${API_COURSES}/projects/`, newLesson, getConfig());
  };
  //! CREATE TASKS
  const createTasks = async (newLesson) => {
    await axios.post(`${API_COURSES}/tasks/`, newLesson, getConfig());
  };
  //! SEND TASK
  const sendTask = async (newLesson) => {
    await axios.post(`${API_COURSES}/tasks-user/`, newLesson, getConfig());
  };
  //! DELETE
  const deleteLesson = async (slug) => {
    try {
      await axios.delete(`${API_COURSES}/courses/${slug}/`, getConfig());
      getLessons();
    } catch (error) {
      console.log(error);
    }
  };
  //! GET_ONE_COURSES
  const getOneCourses = async (slug) => {
    try {
      const slug1 = slug.toLowerCase();
      const formData = new FormData();
      formData.append("slug", slug1);
      const { data } = await axios(
        `${API_COURSES}/courses/${slug1}/`, // Исправлено: добавлен slug1 в URL
        getConfig()
      );
      console.log(data);
      dispatch({
        type: "GET_ONE_COURSES",
        payload: data,
      });
      navigate("/js");
    } catch (error) {
      console.log(error);
    }
  };
  //! GET PROJECTS
  const getProjects = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/projects/`, getConfig());
      console.log(data);
      dispatch({
        type: "GET_PROJECTS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! GET TASKS
  const getTasks = async () => {
    try {
      const { data } = await axios(`${API_COURSES}/tasks/`, getConfig());
      console.log(data);
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
      console.log(data);
      dispatch({
        type: "GET_TASKS-USER",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! EDIT
  const editLesson = async (slug, newLesson) => {
    try {
      await axios.patch(
        `${API_COURSES}/courses/${slug}/`,
        newLesson,
        getConfig()
      );
      navigate("/lesson");
    } catch (error) {}
  };
  const values = {
    getCategories,
    getLessons,
    lessons: state.lessons,
    categories: state.categories,
    createLesson,
    pages: state.pages,
    deleteLesson,
    getOneCourses,
    oneLesson: state.oneLesson,
    editLesson,
    createProject,
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
