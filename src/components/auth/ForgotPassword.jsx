import React, { useState } from "react";
import "./auth.css";
import { useAuth } from "../../context/AuthContextProvider";
import SpinnerLoad from "../../pages/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { handleForgotPassword, loader } = useAuth();

  const handleEmail = () => {
    if (!email.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      handleForgotPassword(formData);
    }
  };
  if (loader) {
    return <SpinnerLoad />;
  }
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Забыли пароль</p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="auth-card-btn" onClick={handleEmail}>Отправить код</button>
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

export default ForgotPassword;
