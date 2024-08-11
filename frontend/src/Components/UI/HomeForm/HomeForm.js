import React from "react";
import "./HomeForm.css";
import { useState } from "react";
import axios from "axios";

export default function HomeForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [comment , setComment] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/submit", { name, phoneNumber });
      console.log(response.data); // Виведення повідомлення в консоль
      setMessage("Дані успішно відправлені на сервер.");
    } catch (error) {
      console.error("Помилка відправлення даних:", error);
      setMessage("Сталася помилка. Спробуйте ще раз пізніше.");
    }
  };
  return (
    <div className="home-form">
      <div className="home-form__title">Залишити коментар</div>
      <div className="home-form__item">
        <form
          className="form-item__inputs"
          type="submit"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            <input
            type="text"
            placeholder="Відгук"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input
            type="number"
            placeholder="Ваш номер телефону"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <button className="form-item__button">Залишити коментар</button>
        </form>
        <div className="form-item__message">{message}</div>
      </div>
    </div>
  );
}
