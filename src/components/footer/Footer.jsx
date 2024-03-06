import React from "react";
import "./footer.scss";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info-left">
          <span>
            <strong>CodeCrafters</strong> это поддерживаемая донорами
            благотворительная организация
          </span>
          <span>
            <strong>Наша миссия:</strong> помочь людям научиться программировать
            бесплатно. Мы достигаем этого, создавая тысячи видеороликов, статей
            и интерактивных уроков по программированию — все они находятся в
            свободном доступе.
          </span>
          <span>
            Пожертвования в пользу <strong>CodeCrafters</strong> идут на наши
            образовательные инициативы и помогают оплачивать серверы, услуги и
            персонал.
          </span>
          <h3 onClick={() => navigate("/donate")}>
            Вы можете сделать пожертвование, не облагаемое налогом, здесь
          </h3>
        </div>
        <div className="footer-info-right">
          <h4>Полезные ссылки</h4>
          <ul>
            <li>
              <a
                href="https://www.freecodecamp.org/news/how-to-delete-a-file-or-directory-in-linux/"
                target="_blank"
              >
                Удалить файл в Linux
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/ssh-meaning-in-linux/"
                target="_blank"
              >
                Что такое SSH в Linux?
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/how-to-fix-merge-conflicts-in-git/"
                target="_blank"
              >
                Исправить конфликты слияния Git
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/"
                target="_blank"
              >
                JS Сумма массива
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/"
                target="_blank"
              >
                Проверьте пустую строку JS
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/what-does-the-dollar-sign-mean-in-python/"
                target="_blank"
              >
                Что означает $ в Python?
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/news/comments-in-json/"
                target="_blank"
              >
                JSON-комментарии
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
