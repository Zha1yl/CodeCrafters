import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Войдите в бесплатный CodeCrafters Learn</p>
        <input type="text" placeholder="Адрес электронной почты" />
        <input type="password" placeholder="Введите пароль" />
        <button>Авторизоваться</button>
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
