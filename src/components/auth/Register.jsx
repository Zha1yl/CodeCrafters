import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { handleRegister, error } = useAuth();
  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
      console.log(formData);
    }
  };
  return (
    <div className="auth-container">
      {error ? <h2>{error}</h2> : null}
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Войдите в бесплатный CodeCamp Learn</p>
        <input
          type="text"
          placeholder="Введите ваше имя"
          onChange={(e) => setName(e.target.value)}
          style={{ color: "black" }}
        />
        <input
          type="text"
          placeholder="Адрес электронной почты"
          onChange={(e) => setEmail(e.target.value)}
          style={{ color: "black" }}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: "black" }}
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{ color: "black" }}
        />

        <button onClick={handleSave}>Зарегистрироваться</button>
        <p>
          У вас уже есть аккаунт?
          <Link style={{ textDecoration: "none", color: "blue" }} to="/login">
            Авторизация
          </Link>
        </p>
      </div>
      <p className="auth-footer">
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
