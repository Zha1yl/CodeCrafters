import React, { useState } from "react";
import "./auth.css";
import { useAuth } from "../../context/AuthContextProvider";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleChangePassword } = useAuth();
  const handlePassword = () => {
    if (!password.trim()) {
      alert("Заполните поле");
    } else {
      let formData = new FormData();
      formData.append("detail", password);
      handleChangePassword(formData);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Изменить пароль</p>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="password-show"
          onClick={() => setShowPassword(!showPassword)}
        >
          Показать пароль
          {showPassword ? "🙈" : "👁️"}
        </button>
        <button className="auth-card-btn" onClick={handlePassword}>
          Сохранить изменение
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

export default ChangePassword;
