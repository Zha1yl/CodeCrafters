import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_COURSES } from "../helpers/api";
import Loader from "../loading/Loader";
import { getConfig } from "../helpers/functions";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState(false);

  //! Register
  const handleRegister = async (formData) => {
    try {
      setLoader(true);
      await axios.post(`${API_COURSES}/register/`, formData);
      navigate("/activate");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      return <Loader />;
    }
  };
  //! Login
  const handleLogin = async (formData, email) => {
    try {
      setLoader(true);
      const { data } = await axios.post(`${API_COURSES}/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoader(false);
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
      const email = JSON.parse(localStorage.getItem("email"));
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

  //! ACTIVATE
  const handleActivate = async (formData) => {
    try {
      setLoader(true);
      await axios.post(`${API_COURSES}/activate/`, formData);
      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoader(false);
    }
  };
  // !CHANGE PASSWORD
  const handleChangePassword = async (formData) => {
    try {
      setLoader(true);
      await axios.post(`${API_COURSES}/ChangePassword/`, formData, getConfig());
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoader(false);
    }
  };
  // !FORGOT PASSWORD
  const handleForgotPassword = async (formData) => {
    try {
      setLoader(true);
      await axios.post(`${API_COURSES}/ForgotPassword/`, formData);
      navigate("/forgotsolution");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoader(false);
    }
  };
  // ! FORGOT PASSWORD SOLUTION
  const forgotPasswordSolution = async (formData) => {
    try {
      setLoader(true);
      await axios.post(`${API_COURSES}/ForgotPasswordSolution/`, formData);
      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data));
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
    handleActivate,
    handleChangePassword,
    handleForgotPassword,
    forgotPasswordSolution,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
