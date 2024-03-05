import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import LessonContextProvider from "./context/LessonContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <LessonContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </LessonContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
