import React, { useEffect, useState } from "react";
import "../../lessons/lesson.css";
import JS from "../../../assets/icons8-javascript (3).svg";
import LessonAccord from "../accordLess/LessonAccord";
import { NavLink, useParams } from "react-router-dom";
import { useLesson } from "../../../context/LessonContextProvider";
const LessonComponentJs = () => {
  const { slug } = useParams();
  console.log(slug);
  const { oneCourses, getOneCourses } = useLesson();
  useEffect(() => {
    getOneCourses(slug);
  }, []);
  console.log(oneCourses);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <div className="container_lesson">
      <div className="algoritm">
        <div className="algoritm__text">
          Алгоритмы JavaScript и структуры данных (бета- версия)
        </div>
        <img className="lesson_icon" src={JS} alt="" />
      </div>
      <div className="text">
        <div className="text__descrip">
          Разработчики используют HTML и CSS для управления содержимым и стилем
          страницы. И они используют JavaScript, чтобы сделать эту страницу
          интерактивной.
        </div>
        <div className="text__descrip">
          В рамках сертификации по алгоритмам JavaScript и структурам данных вы
          изучите основы JavaScript, такие как переменные, массивы, объекты,
          циклы, функции, DOM и многое другое.
        </div>
        <div className="text__descrip">
          Вы также узнаете об объектно-ориентированном программировании (ООП),
          функциональном программировании, алгоритмическом мышлении, о том, как
          работать с локальным хранилищем и о том, как получать данные с помощью
          API.
        </div>
        <div className="block1">
          Примечание. Некоторые расширения браузера, такие как блокировщики
          рекламы и скриптов, могут мешать тестам. Если вы столкнулись с
          проблемами, мы рекомендуем отключить расширения, которые изменяют или
          блокируют содержимое страниц во время прохождения курса.
        </div>
        <div className="block2">
          <p className="block2__text">
            Эта сертификация в настоящее время находится на стадии
            бета-тестирования. Пожалуйста, рассмотрите возможность пожертвования
            для поддержки завершения его разработки.
          </p>
          <NavLink to={"/donate"}>
            <button
              className="button_lesson2"
              style={{
                backgroundColor: buttonHovered ? "#2d6786" : "",
                color: buttonHovered ? "#d9edf7" : "",
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Пожертвовать сейчас
            </button>
          </NavLink>
        </div>
      </div>
      <h1 className="h1__lesson">Курсы</h1>
      <LessonAccord projects={oneCourses.projects} />
    </div>
  );
};

export default LessonComponentJs;
