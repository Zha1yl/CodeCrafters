import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const { handleLogin, error, loader } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />

        <p>Войдите в бесплатный CodeCamp Learn</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          style={{ color: "black" }}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: "black" }}
        />
        <button onClick={handleSave}>Login</button>
        <p>
          У вас ещё нет аккаунта?
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            to="/register"
          >
            Зарегистрироваться
          </Link>
        </p>
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
