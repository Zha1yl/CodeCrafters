import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Войдите в бесплатный CodeCamp Learn</p>
        <input type="text" placeholder="Адрес электронной почты" />
        <input type="password" placeholder="Введите пароль" />
        <input type="password" placeholder="Повторите пароль" />
        <button>Зарегистрироваться</button>
        <p>
          У вас уже есть аккаунт?
          <Link style={{ textDecoration: "none" }} to="/login">
            Авторизация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
