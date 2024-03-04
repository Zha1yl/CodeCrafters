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
      <p style={{ width: "69vw", textAlign: "center", marginLeft: "16vw" }}>
        freeCodeCamp бесплатен, и ваша учетная запись по умолчанию является
        частной. Мы используем ваш адрес электронной почты, чтобы подключить вас
        к вашей учетной записи. Чтобы создать учетную запись на freeCodeCamp,
        вам должно быть не менее 13 лет. Продолжая, вы подтверждаете, что
        прочитали и согласны с Условиями обслуживания и Политикой
        конфиденциальности freeCodeCamp.org .
      </p>
    </div>
  );
};

export default Register;