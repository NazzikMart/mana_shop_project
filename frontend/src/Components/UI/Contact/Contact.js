import React from "react";
import "./Contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3003/contactData",
        formData
      );

      console.log(response.data.message);
      setFormData({
        name: "",
        phone: "",
        comment: ""
      });
    } catch (error) {
      console.error("Помилка при відправці даних на сервер:", error.message);
      if (error.response) {
        console.error("Статус помилки:", error.response.status);
      } else if (error.request) {
        console.error("Запит не був відправлений:", error.request);
      } else {
        console.error("Помилка:", error.message);
      }
      setErrors({
        submit:
          "Помилка при відправці форми. Будь ласка, спробуйте ще раз."
      });
    }
  };
  return (
    <div className="contact">
      <div className="contact-name">Зв'язатися з нами</div>

      <div className="contact-info">
        <div className="contact-info-item">
          <i class="fa-solid fa-map-location-dot contact-icons"></i>
          <span className="contact-info-item__name">Адреса</span>
          <span className="contact-info-item__desc">
            <a href="#" className="contact-info-item__desc">
              м . Тернопіль , вул. Бродівська 14
            </a>
          </span>
        </div>
        <div className="contact-info-item">
          <i class="fa-solid fa-phone contact-icons"></i>
          <span className="contact-info-item__name">Номер телефону</span>
          <span className="contact-info-item__desc">
            <a href="#" className="contact-info-item__desc">
              +380974613997
            </a>
          </span>
        </div>
        <div className="contact-info-item">
          <i class="fa-brands fa-telegram contact-icons"></i>
          <span className="contact-info-item__name">Телеграм</span>
          <span className="contact-info-item__desc">
            <a href="https://t.me/sotatern" className="contact-info-item__desc">
              Сота - студія техніки
            </a>
          </span>
        </div>
        <div className="contact-info-item">
          <i className="fa-solid fa-envelope contact-icons"></i>
          <span className="contact-info-item__name">Пошта</span>
          <span className="contact-info-item__desc">
            <a href="#" className="contact-info-item__desc">
              studiatehnikisota@gmail.com
            </a>
          </span>
        </div>
      </div>

      <div className="contact-form__map">
        <div className="contact-form">
          <span className="contact-form-name">
            Отримайте консультацію по товарах прямо зараз!
          </span>
          <span className="contact-form-desc">Доступно 24 години на добу!</span>
          <form className="form-contact" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Введіть своє ім'я"
              className="form-contact-name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Введіть свій номер телефону"
              className="form-contact-phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="comment"
              placeholder="Напишіть, який саме товар вас цікавить"
              className="form-contact-comment"
              value={formData.comment}
              onChange={handleChange}
            />
            {/* Показати помилки відправки форми, якщо є */}
            {errors.submit && <p className="error-message">{errors.submit}</p>}
            <button type="submit" className="form-contact-button">
              Отримати консультацію
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.950281034536!2d25.59385478839354!3d49.56096127736908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303148fe27cebf%3A0xfdd6c5000b9c1397!2z0JHRgNC-0LTRltCy0YHRjNC60LAg0LLRg9C70LjRhtGPLCAxNCwg0KLQtdGA0L3QvtC_0ZbQu9GMLCDQotC10YDQvdC-0L_RltC70YzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDYwMDI!5e0!3m2!1suk!2sua!4v1699084802486!5m2!1suk!2sua"
            width="600"
            height="450"
            style={{
              border: "0",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
