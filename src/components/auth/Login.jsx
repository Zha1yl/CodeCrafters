import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import Loader from "../../loading/Loader";

const Login = () => {
  const { handleLogin, error, loader } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
      navigate("/");
    }
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Войдите в бесплатный CodeCamp Learn</p>
        {error ? <h2>{error}</h2> : null}
        <input
          className="auth-card-inp"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="password-show"
          onClick={() => setShowPassword(!showPassword)}
        >
          Показать пароль
          {showPassword ? "🙈" : "👁️"}
        </button>
        <button className="auth-card-btn" onClick={handleSave}>
          Авторизоваться
        </button>
        <p>
          У вас ещё нет аккаунта?
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            to="/register"
          >
            Зарегистрироваться
          </Link>
        </p>
        <Link
          className="forgot-password"
          style={{ padding: "1vw", color: "blue" }}
          to={"/forgotpas"}
        >
          Забыли пароль?
        </Link>
      </div>
      <p className="auth-footer">
        codeCrafters бесплатен, и ваша учетная запись по умолчанию является
        частной. Мы используем ваш адрес электронной почты, чтобы подключить вас
        к вашей учетной записи. Чтобы создать учетную запись на codeCrafters,
        вам должно быть не менее 13 лет. Продолжая, вы подтверждаете, что
        прочитали и согласны с Условиями обслуживания и Политикой
        конфиденциальности codeCrafters.org .
      </p>
    </div>
  );
};

export default Login;
