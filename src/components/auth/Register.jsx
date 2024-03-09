import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { handleRegister, handleActivate, error } = useAuth();
  const handleSave = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
      handleActivate(formData);
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
        <p>Войдите в бесплатный CodeCrafters Learn</p>
        <input
          type="text"
          placeholder="Имя пользователя"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button onClick={handleSave}>Регистрация</button>

        <p>
          У вас уже есть аккаунт?
          <Link style={{ textDecoration: "none", color: "blue" }} to="/login">
            Авторизация
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

export default Register;
