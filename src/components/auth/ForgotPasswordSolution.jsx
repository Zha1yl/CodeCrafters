import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import Loader from "../../loading/Loader";
import "./auth.css";

const ForgotPasswordSolution = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { forgotPasswordSolution, error, loader } = useAuth();
  const handleSave = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !code.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("code", code);
      forgotPasswordSolution(formData);
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
        <p>Войдите в бесплатный CodeCrafters Learn</p>
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
        <input
          className="auth-card-inp"
          type="text"
          placeholder="Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="password-show"
          onClick={() => setShowPassword(!showPassword)}
        >
          Показать пароль
          {showPassword ? "🙈" : "👁️"}
        </button>
        <button className="auth-card-btn" onClick={handleSave}>
          Подтвердить
        </button>
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

export default ForgotPasswordSolution;
