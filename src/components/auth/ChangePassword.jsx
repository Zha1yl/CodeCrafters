import React, { useState } from "react";
import "./auth.css";
import { useAuth } from "../../context/AuthContextProvider";
import Loader from "../../loading/Loader";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [detail, setDetail] = useState("");
  const { handleChangePassword, error, loader } = useAuth();
  const handlePassword = () => {
    if (
      !email.trim() ||
      !oldPassword.trim() ||
      !newPassword.trim() ||
      !newPasswordConfirm.trim()
    ) {
      alert("Заполните поле");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("old_password", oldPassword);
      formData.append("new_password", newPassword);
      formData.append("new_password_confirm", newPasswordConfirm);
      formData.append("detail", detail);
      handleChangePassword(formData);
    }
  };
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="auth-container">
      {error ? <h2>{error}</h2> : null}
      <div className="auth-card">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
        />
        <p>Изменить пароль</p>
        <input
          className="auth-card-inp"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          placeholder="Old password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          placeholder="New password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          placeholder="New password confirm"
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
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
