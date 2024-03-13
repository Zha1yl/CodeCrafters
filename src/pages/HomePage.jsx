import React, { useEffect } from "react";
import "./homePage.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useAuth } from "../context/AuthContextProvider";
import { useLesson } from "../context/LessonContextProvider";
import { ADMIN_EMAILS } from "../helpers/api";
import Comment from "../Comment";


const HomePage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { courses, getCourses, deleteCourses } = useLesson();
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <main className="main">
        <h1 className="main__title">
          Добро пожаловать в учебную программу
          <span> CodeCrafters.</span>
        </h1>
        <h3 className="main__subtitle">
          Пожалуйста, замедлите шаг и прочитайте это.
        </h3>
        <p className="main__text">
          CodeCrafters — это проверенный путь к вашей первой работе разработчика
          программного обеспечения.
        </p>
        <p className="main__text">
          После завершения проекта более 40 000 человек получили работу
          разработчиков, в том числе в таких крупных компаниях, как Google и
          Microsoft.
        </p>
        <p className="main__text">
          Если вы новичок в программировании, мы рекомендуем вам начать с самого
          начала и получать эти сертификаты по порядку.
        </p>
        <p className="main__text">
          Чтобы получить каждый сертификат, создайте 5 необходимых проектов и
          пройдите все их тесты.
        </p>
        <p className="main__text">
          Вы можете добавить эти сертификаты в свое резюме или в LinkedIn. Но
          более важным, чем сертификаты, является практика, которую вы получаете
          на этом пути.
        </p>
        <p className="main__text">
          Если вы чувствуете себя подавленным, это нормально. Программировать
          сложно.
        </p>
        <p className="main__text">
          Практика – это ключ. Практика, практика, практика.
        </p>
        <p className="main__text">
          Эта учебная программа даст вам тысячи часов практической практики
          программирования.
        </p>
        <p className="main__text">
          А если вы хотите узнать больше о математике и теории информатики, у
          нас также есть тысячи часов видеокурсов на
          <Link className="main__link"> YouTube-канале CodeCrafters.</Link>
        </p>
        <p className="main__text">
          Если вы хотите получить работу разработчика или клиентов-фрилансеров,
          навыки программирования будут лишь частью головоломки. Вам также
          необходимо построить свою личную сеть и свою репутацию как
          разработчика.
        </p>
        <p className="main__text">
          Сделать это можно на LinkedIn и GitHub, а также
          <Link className="main__link"> на форуме CodeCrafters.</Link>
        </p>
        <p className="main__text">Приятного кодирования!</p>
        <div className="main__btn">
          {currentUser ? null : (
            <button className="main__button" onClick={() => navigate("/login")}>
              Войдите чтобы начать
            </button>
          )}
        </div>

        <div className="section">
          <h2 className="section__title">
            Получите бесплатные проверенные сертификаты по основной учебной
            программе CodeCrafters:
          </h2>
          {/* ОТОБРАЖЕНИЕ */}
          {courses.map((elem) => (
            <div
              key={elem.slug} // Добавлен ключ для элемента списка
              className="section__block"
              onClick={() => {
                const slug = elem.title.toLowerCase();
                navigate(`/js/${elem.slug}/`);
              }}
            >
              <div className="section__pic">
                <img src={elem.image_light} alt="" />
              </div>
              <p className="section__desc">{elem.title}</p>
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  right: "21vw",
                }}
              >
                {currentUser === ADMIN_EMAILS.admin_1 ||
                currentUser === ADMIN_EMAILS.admin_2 ? (
                  <>
                    <button
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#1c1c25",
                        width: "auto",
                        padding: "0 5px",
                        height: "30px",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                      onClick={() => {
                        setTimeout(() => {
                          navigate(`/edit/${elem.slug}`);
                        }, 1000);
                      }}
                    >
                      EDIT COURSES
                    </button>
                    <button
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#1c1c25",
                        width: "auto",
                        padding: "0 5px",
                        height: "30px",
                        borderRadius: "4px",
                      }}
                      onClick={() => {
                        deleteCourses(elem.slug);
                      }}
                    >
                      DELETE COURSES
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
<Comment />
            </div>
          ))}
        </div>
        <div className="assistant-container">
          <button className="assistant-button">Chat with ChatGPT</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;