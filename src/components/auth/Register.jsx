import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import "./auth.css";
import { loader } from "@monaco-editor/react";
import Loader from "../../loading/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const { handleRegister, error, loader } = useAuth();
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
      formData.append("image", image);
      handleRegister(formData);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  if (loader) {
    return <Loader />;
  }

  return (
    <div className="auth-container">
      {error ? <h2>{error}</h2> : null}
      <div className="auth-card">
        <input
          className="auth-card-inp"
          style={{ width: "8.5vw", height: "2.2vw" }}
          type="file"
          onChange={handleImageChange}
        />
        <img src={image && URL.createObjectURL(image)} alt="" />

        <p>Войдите в бесплатный CodeCrafters Learn</p>
        <input
          className="auth-card-inp"
          type="text"
          placeholder="Имя пользователя"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="auth-card-inp"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="auth-card-inp"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button
          className="password-show"
          onClick={() => setShowPassword(!showPassword)}
        >
          Показать пароль
          {showPassword ? "🙈" : "👁️"}
        </button>
        <button className="auth-card-btn" onClick={handleSave}>
          Регистрация
        </button>
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
