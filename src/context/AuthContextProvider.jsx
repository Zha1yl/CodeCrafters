import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_COURSES } from "../helpers/api";
import ConfirmationPage from "../pages/ConfirmAccount";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState(false);
  // !confirm
  const handleConfirmAccount = async (email, code) => {
    try {
      const res = await axios.post(`${API_COURSES}/activate/`, { email, code });
    } catch (error) {
      setError("Неверный код подтверждения");
    }
  };
  //! Register
  const handleRegister = async (formData) => {
    try {
      await axios.post(`${API_COURSES}/register/`, formData);
      navigate("/login");
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
  //! Login
  const handleLogin = async (formData, email) => {
    try {
      setLoader(true);
      const response = await axios.post(`${API_COURSES}/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(response));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response));
    } finally {
      setLoader(false);
    }
  };
  const values = {
    handleRegister,
    error,
    handleLogin,
    currentUser,
    loader,
    checkAuth,
    logout,
    handleConfirmAccount,
  };
  return (
    <authContext.Provider value={values}>
      {children} <ConfirmationPage />
    </authContext.Provider>
  );
};

export default AuthContextProvider;
