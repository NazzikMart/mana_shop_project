import React from "react";
import './Remont.css'

export default function Remont() {
  return (
    <div>
      <header>
        <h1>Ремонт техніки</h1>
      </header>

      <nav>
        <a href="#">Головна</a>
        <a href="#">Послуги</a>
        <a href="#">Про нас</a>
        <a href="#">Контакти</a>
      </nav>

      <section>
        <h2>Про нас</h2>
        <p>
          Ми - професійна команда, яка займається ремонтом різноманітної
          техніки. Наші кваліфіковані майстри з радістю вам допоможуть.
        </p>
      </section>

      <section>
        <h2>Послуги</h2>
        <ul>
          <li>Ремонт комп'ютерів і ноутбуків</li>
          <li>Ремонт смартфонів і планшетів</li>
          <li>Ремонт побутової техніки</li>
          <li>Обслуговування та діагностика</li>
        </ul>
      </section>

      <section>
        <h2>Контакти</h2>
        <p>Наша адреса: вул. Прикладна, 123, м. Місто</p>
        <p>Телефон: +123456789</p>
        <p>Email: info@example.com</p>
      </section>
    </div>
  );
}
