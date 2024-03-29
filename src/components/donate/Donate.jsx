import React, { useState } from "react";
import "./donate.css";
import Accardion from "../accardion/Accardion";

const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [jifra, setJifra] = useState(0);

  // Функция для обновления значения цифры
  const handleAmountChange = (newAmount, newJifra) => {
    setAmount(newAmount);
    setJifra(newJifra);
  };

  const faglist = [
    {
      q: "Как я могу получить помощь с помощью пожертвований?",
      a: "Отправьте копию квитанции о пожертвовании на адрес доноров@freecodecamp.org и расскажите, чем мы  можем помочь.",
    },
    {
      q: "Насколько эффективен CodeCrafters?",
      a: `Бюджет CodeCrafters намного меньше, чем у большинства сопоставимых благотворительных организаций. Мы не привлекли профессиональных сборщиков средств. Вместо этого Куинси делает все сам. Однако, имея бюджет всего в несколько сотен тысяч долларов в год, мы смогли помочь миллионам людей.`,
    },
    {
      q: `Принимает ли CodeCrafters пожертвования в биткойнах или других криптовалютах?
      `,
      a: `Да. Отправьте электронное письмо Куинси по адресу quincy@freecodecamp.org, и он отправит вам информацию о кошельке CodeCrafters. Он также может предоставить вам квитанцию ​​о пожертвовании, если она вам нужна для уплаты налогов. `,
    },
    {
      q: "Как я могу настроить пожертвование на CodeCrafters.org?",
      a: "Это было бы огромной помощью. Поскольку это скорее ручной процесс, Куинси может помочь вам пройти через него лично. Пожалуйста, напишите ему по адресу quincy@CodeCrafters.org.",
    },
    {
      q: "Как я могу пожертвовать акции на CodeCrafters.org?",
      a: "Мы будем рады вашим пожертвованиям на акции. Отправьте электронное письмо Куинси напрямую, и он поможет вам в этом, а также поделитесь данными брокерского счета нашей благотворительной организации: quincy@freecodecamp.org.",
    },
  ];

  return (
    <div>
      <div className="try">
        <div>
          <h1 className="hello">
            Помогите нашей <br /> благотворительной <br /> организации сделать{" "}
            <br /> больше
          </h1>
          <div className="right">
            <p>
              CodeCrafters — это высокоэффективная образовательная
              благотворительная организация.
            </p>
            <br />
            <p>
              Делая пожертвования в пользу CodeCrafters, вы помогаете людям
              освоить новые навыки и обеспечить свои семьи.
            </p>
            <br />
            <p>
              Вы также помогаете нам создавать новые ресурсы, которые вы можете
              использовать для расширения своих технологических навыков.
            </p>
          </div>
        </div>
        <div className="dengi">
          <h3>
            Подтвердите пожертвование в <br /> размере{" "}
            <span id="digit">{amount}</span> долларов США в месяц:
          </h3>
          <button className="privet" onClick={() => handleAmountChange(5, 250)}>
            5 <br />
            долларов
          </button>
          <button
            className="privet"
            onClick={() => handleAmountChange(10, 500)}
          >
            10 <br /> долларов
          </button>
          <button
            className="privet"
            onClick={() => handleAmountChange(20, 1000)}
          >
            20 <br /> долларов
          </button>
          <button
            className="privet"
            onClick={() => handleAmountChange(40, 2000)}
          >
            40 <br /> долларов
          </button>
          <p>
            Ваше пожертвование в размере {amount} <br /> долларов обеспечит{" "}
            {jifra} часов <br /> обучения людям по всему миру <br /> каждый
            месяц.
          </p>
          <button className="poje">Пожертвовать</button>
        </div>
      </div>
      <br />
      <div className="status">
        <h2 className="h2">Преимущества от статуса спонсора:</h2>
        <ul>
          <li>
            Больше никаких всплывающих окон с предложениями о <br />{" "}
            пожертвованиях
          </li>
          <li>Вы получите значок сторонника</li>
          <li>
            Изображение вашего профиля будет окружено золотым <br /> ореолом.
          </li>
          <li>
            Вы получите доступ к специальным каналам Supporter <br /> Discord —{" "}
            <a href="#"> присоединяйтесь к нашему Discord</a> и используйте{" "}
            <br /> /supporterкоманду, чтобы получить доступ.
          </li>
          <li>И еще больше преимуществ в 2024 году</li>
        </ul>
      </div>
      <br />
      <div className="status">
        <h2 className="h2">Текущие инициативы:</h2>
        <ul>
          <li>Создание новых учебных программ по JavaScript и Pythonх</li>
          <li>
            Создание учебных программ по английскому языку и <br /> математике
          </li>
          <li>
            Перевод нашей учебной программы и учебных пособий на 32 <br />{" "}
            языка.
          </li>
          <li>
            Создание бесплатной аккредитованной степени бакалавра <br />{" "}
            информатики
          </li>
        </ul>
      </div>
      <br />
      <div className="status">
        <h2 className="h2">Достижения нашего сообщества в этом году:</h2>
        <ul>
          <li>Опубликовано 114 полноценных курсов на YouTube.</li>
          <li>
            Опубликовано 1045 текстовых руководств по <br /> программированию и
            20 бесплатных книг через <br /> CodeCrafters Press.
          </li>
          <li>
            Мы объединили 2753 кода, внесенных в наши репозитории с <br />{" "}
            открытым исходным кодом на GitHub.
          </li>
          <li>
            Перевел 2 106 203 слова, чтобы сделать нашу учебную <br /> программу
            и учебные пособия более доступными для <br /> носителей многих
            языков мира.
          </li>
        </ul>
      </div>
      <Accardion faglist={faglist} />
    </div>
  );
};

export default Donate;
