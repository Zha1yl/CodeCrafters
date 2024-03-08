import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { API_COURSES } from "../helpers/api";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  // !Регистрация
  const handleRegister = async (formData) => {
    try {
      await axios.post(`${API_COURSES}/register/`, formData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  // !LOGIN
  const handleLogin = async (formData, email) => {
    try {
      const { data } = await axios.post(`${API_COURSES}/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
    }
  };
  // !CHECKAUTH
  const checkAuth = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const { data } = await axios.post(`${API_COURSES}/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: data,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
    }
  };
  // !logout
  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/login");
  };

  const values = {
    handleRegister,
    handleLogin,
    checkAuth,
    logout,
    currentUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
