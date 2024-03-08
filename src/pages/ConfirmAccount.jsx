import axios from "axios";
import React, { useState } from "react";
import { API_COURSES } from "../helpers/api";

const ConfirmationPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  

  const handleSubmit = async (email) => {
    try {
      const response = await axios.post(`${API_COURSES}/activate/`, {
        email,
        code,
      });
      // Обработка успешного подтверждения аккаунта
      console.log("Аккаунт успешно подтвержден");
    } catch (error) {
      // Обработка ошибок
      console.error("Ошибка при подтверждении аккаунта:", error);
      setError("Неверный код подтверждения");
    }
  };

  return (
    <div>
      <h2>Введите код подтверждения из письма:</h2>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleSubmit}>Подтвердить аккаунт</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ConfirmationPage;
