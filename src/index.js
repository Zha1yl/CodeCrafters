import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import LessonContextProvider from "./context/LessonContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <LessonContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </LessonContextProvider>
      </ChakraProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
