import React, { useState } from "react";
import "./payPage.scss";

const PayPage = () => {
  // ! Функция для полей 16 значного инпута
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    }
  };

  // Генерация плейсхолдера на основе введенных значений
  const generatePlaceholder = () => {
    let placeholder = "";
    inputs.forEach((value) => {
      placeholder += value.padEnd(4, "_") + " "; // Добавляем пустое место после каждого введенного значения
    });
    return placeholder.trim(); // Удаляем лишние пробелы в конце строки
  };

  return (
    <div className="pay">
      <div className="pay__wrapper">
        {/* // ! header */}
        <div className="pay__header">
          <div className="pay__back">
            <svg
              className="pay__svg"
              width="20"
              height="22"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1236_3098)">
                <path
                  d="M8 4L5 7L8 10"
                  stroke="#000001"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
                  stroke="#000001"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1236_3098">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="pay__back_word">BACK</p>
          </div>
          <div className="pay__logo">
            <p className="pay__back_word">Способ оплаты</p>
          </div>
          <div className="pay__detail">
            <p className="pay__back_word">Order Details</p>
          </div>
        </div>
        {/* // ! top */}
        <div className="pay__top">
          <div className="pay__method">
            <p className="pay__method_word">Card</p>
          </div>
          <div className="pay__method">
            <p className="pay__method_word">Paypal</p>
          </div>
          <div className="pay__method">
            <p className="pay__method_word">Phone</p>
          </div>
        </div>
        {/* // ! section */}
        <div className="pay__section">
          <div className="pay__left gradient">
            <div className="pay__card">
              <div className="pay__card_top">
                <div className="pay__card_logo">
                  {/* // ! logo */}
                  <h2 className="pay__card_title">visa</h2>
                </div>
                <div className="pay__card_cheap">
                  <svg
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    className="pay__svg_cheap"
                  >
                    <path
                      fill="#ff9800"
                      d="M1.00000007 10.47368417V3.52631583c0-.69473683.56842105-1.26315788 1.26315788-1.26315788h9.4736841c.69473683 0 1.26315788.56842105 1.26315788 1.26315788v6.94736834c0 .69473683-.56842105 1.26315788-1.26315788 1.26315788h-9.4736841c-.69473683 0-1.26315788-.56842105-1.26315788-1.26315788z"
                    />
                    <path
                      fill="#ffd54f"
                      d="M12.99999993 6.05263159v-.63157894H9.21052629c-.34736842 0-.63157894-.28421052-.63157894-.63157894s.28421052-.63157894.63157894-.63157894h.31578947v-.63157894h-.31578947c-.69473683 0-1.26315788.56842105-1.26315788 1.26315788 0 .69473683.56842105 1.26315788 1.26315788 1.26315788h.94736841v1.89473682h-.94736841c-.88421052 0-1.57894735.69473683-1.57894735 1.57894735s.69473683 1.57894735 1.57894735 1.57894735h.63157894v-.63157894h-.63157894c-.5368421 0-.94736841-.41052631-.94736841-.94736841 0-.5368421.41052631-.94736841.94736841-.94736841h3.78947364v-.63157894h-2.21052629V6.05263159h2.21052629zM4.78947371 7.94736841H3.8421053V6.05263159h.94736841c.69473683 0 1.26315788-.56842105 1.26315788-1.26315788 0-.69473683-.56842105-1.26315788-1.26315788-1.26315788H3.8421053v.63157894h.94736841c.34736842 0 .63157894.28421052.63157894.63157894s-.28421052.63157894-.63157894.63157894H1.00000007v.63157894h2.21052629v1.89473682H1.00000007v.63157894h3.78947364c.5368421 0 .94736841.41052631.94736841.94736841 0 .5368421-.41052631.94736841-.94736841.94736841h-.63157894v.63157894h.63157894c.88421052 0 1.57894735-.69473683 1.57894735-1.57894735s-.69473683-1.57894735-1.57894735-1.57894735z"
                    />
                  </svg>
                </div>
              </div>
              <div className="pay__card_field">
                {inputs.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(event) => handleChange(index, event)}
                    className="pay__card_input"
                    maxLength="4"
                    placeholder={generatePlaceholder().split(" ")[index]}
                  />
                ))}
              </div>
              <div className="pay__card_bottom">
                <div className="pay__card_date">
                  <h2 className="pay__date_word">explore date</h2>
                  <h2 className="pay__date_date">03/23</h2>
                </div>
                <div className="pay__card_cvv">
                  <div className="pay__cvv_lock"></div>
                  <div className="pay__cvv_code"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pay__right"></div>
        </div>
        {/* // ! bottom */}
        <div className="pay__bottom"></div>
      </div>
    </div>
  );
};

export default PayPage;
