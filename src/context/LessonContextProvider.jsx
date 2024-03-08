import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import { getConfig } from "../helpers/functions";
import axios from "axios";
import { API_COURSES } from "../helpers/api";
const lessonContext = createContext();
export const useLesson = () => useContext(lessonContext);
const INIT_STATE = {
  lessons: [],
  oneLesson: {},
  categories: [],
  pages: 5,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_LESSONS":
      return { ...state, lessons: action.payload };
    case "GET_ONE_LESSON":
      return { ...state, oneLesson: action.payload };
  }
};
const LessonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  // const getCategories = async () => {
  //   const { data } = await axios(`${API_COURSES}/courses/`, getConfig());
  //   dispatch({
  //     type: "GET_CATEGORIES",
  //     payload: data.results,
  //   });
  // };
  //! GET
  const getLessons = async () => {
    try {
      const { data } = await axios(
        `${API_COURSES}/courses/${window.location.search}`,
        getConfig()
      );
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
  //! DELETE
  const deleteLesson = async (slug) => {
    try {
      await axios.delete(`${API_COURSES}/courses/${slug}/`, getConfig());
      getLessons();
    } catch (error) {
      console.log(error);
    }
  };
  //! GET_ONE_LESSON
  const getOneLesson = async (slug) => {
    try {
      const { data } = await axios(
        `${API_COURSES}/courses/${slug}/`,
        getConfig()
      );
      dispatch({
        type: "GET_ONE_LESSON",
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
    // getCategories,
    getLessons,
    lessons: state.lessons,
    categories: state.categories,
    createLesson,
    pages: state.pages,
    deleteLesson,
    getOneLesson,
    oneLesson: state.oneLesson,
    editLesson,
  };
  return (
    <lessonContext.Provider value={values}>{children}</lessonContext.Provider>
  );
};

export default LessonContextProvider;
