import React, { createContext, useContext } from 'react'
const lessonContext = createContext();
export const useLesson = ()=> useContext(lessonContext)

const LessonContextProvider = ({children}) => {
  return (
    <lessonContext.Provider>
      {children}
    </lessonContext.Provider>
  )
}

export default LessonContextProvider
