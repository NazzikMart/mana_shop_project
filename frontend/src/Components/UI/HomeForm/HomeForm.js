import React from "react";
import './HomeForm.css'

export default function HomeForm() {
  return (
    <div className="home-form">
      <div className="home-form__title">Стати нашим клієнтом</div>
      <div className="home-form__item">
        <div className="form-item__inputs">
          <input type="text" placeholder="Ваше ім'я" />
          <input type="number" placeholder="Ваш номер телефону" />
        </div>
        {/* <div className="form-item__checked">
          <input type="checked"></input>
          <p>
            Я приймаю <span>умови передачі персональних даних</span>
          </p>
        </div> */}
        <div className="form-item__button">
            <button>Залишити заявку</button>
        </div>
      </div>
    </div>
  );
}
