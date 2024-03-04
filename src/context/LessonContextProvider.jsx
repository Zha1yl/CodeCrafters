import React, { createContext, useContext } from "react";
const lessonContext = createContext();
export const useLesson = () => useContext(lessonContext);

const LessonContextProvider = ({ children }) => {
  const values = {};
  return (
    <lessonContext.Provider value={values}>{children}</lessonContext.Provider>
  );
};

export default LessonContextProvider;
