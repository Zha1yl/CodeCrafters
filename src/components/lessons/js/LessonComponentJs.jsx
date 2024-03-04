import React from "react";
import "../../lessons/lesson.css";
const LessonComponentJs = () => {
  return (
    <div className="container">
      <div className="algoritm">
        <div>
          Алгоритмы JavaScript и структуры данных (бета- <br />
          версия)
        </div>
        <img src="" alt="" />
      </div>
      <div className="text">
        <div className="text__descrip">
          Разработчики используют HTML и CSS для управления содержимым и<br />
          стилем страницы. <br /> И они используют JavaScript, чтобы сделать эту
          страницу интерактивной.
        </div>
        <div className="text__descrip">
          В рамках сертификации по алгоритмам JavaScript и структурам данных вы{" "}
          <br />
          изучите основы JavaScript, такие как переменные, массивы, объекты,
          циклы, <br /> функции, DOM и многое другое.
        </div>
        <div className="text__descrip">
          Вы также узнаете об объектно-ориентированном программировании (ООП),
          <br />
          функциональном программировании, алгоритмическом мышлении, о том, как{" "}
          <br />
          работать с локальным хранилищем и о том, как получать данные с помощью{" "}
          <br />
          API.
        </div>
      </div>
    </div>
  );
};

export default LessonComponentJs;
