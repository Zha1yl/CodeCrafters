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
import ChangePassword from "../components/auth/ChangePassword";
import ForgotPassword from "../components/auth/ForgotPassword";
import ForgotPasswordSolution from "../components/auth/ForgotPasswordSolution";

import Loader from "../loading/Loader";
import PayPage from "../pages/PayPage";

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
    { id: 12, link: "/changepas", element: <ChangePassword /> },
    { id: 13, link: "/forgotpas", element: <ForgotPassword /> },
    { id: 14, link: "/forgotsolution", element: <ForgotPasswordSolution /> },
    { id: 15, link: "/addlesson", element: <AddLessons /> },
    { id: 16, link: "/loader", element: <Loader /> },
    { id: 17, link: "/pay", element: <PayPage /> },
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
