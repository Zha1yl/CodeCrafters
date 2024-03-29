import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import "../";
import Loader from "../loading/Loader";

const AcivateCode = () => {
  const [activate, setActivate] = useState("");
  const [email, setEmail] = useState("");
  const { handleActivate, loader } = useAuth();
  const handleCode = () => {
    if (!email.trim() || !activate.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("code", activate);
      handleActivate(formData);
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
        <p>Активируйте аккаунт</p>
        <input
          className="auth-card-inp"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-card-inp"
          type="text"
          placeholder="код активации"
          onChange={(e) => setActivate(e.target.value)}
        />
        <button className="auth-card-btn" onClick={handleCode}>
          Отправить код
        </button>
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

export default AcivateCode;
