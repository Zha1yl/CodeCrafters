import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CodeEditorPage from "../pages/CodeEditorPage";
import Donate from "../components/donate/Donate";
import VideoPage from "../pages/VideoPage";
import TasksPage from "../pages/TasksPage";
import LessonContentPitthon from "../components/lessons/pithon/LessonContentPitthon";
import LessonComponentJs from "../components/lessons/js/LessonComponentJs";
import AcivateCode from "../pages/AcivateCode";
import AddLessons from "../pages/AddLessons";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/auth", element: <Auth /> },
    { id: 3, link: "/login", element: <Login /> },
    { id: 4, link: "/register", element: <Register /> },
    { id: 5, link: "/codeedit", element: <CodeEditorPage /> },
    { id: 6, link: "/donate", element: <Donate /> },
    { id: 7, link: "/video", element: <VideoPage /> },
    { id: 8, link: "/tasks", element: <TasksPage /> },
    { id: 9, link: "/py", element: <LessonContentPitthon /> },
    { id: 10, link: "/js", element: <LessonComponentJs /> },
    { id: 11, link: "/activate", element: <AcivateCode /> },
    { id: 12, link: "/addlesson", element: <AddLessons /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
