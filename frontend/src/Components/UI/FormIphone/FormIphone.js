import React from "react";
import "./FormIphone.css";
import hero from "../../../img/hero_endframe__cvklg0xk3w6e_large 1.jpg";
import axios from "axios";
import { useState } from "react";


export default function FormIphone() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/iphone", { name, phone });
      setMessage(response.data);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Please try again later.");
    }
  };
  return (
    <div className="form">
      <div className="form-items ">
        <div className="form-item background">
          <div className="form-title">ХОЧЕШ IPHONE 14 PRO?</div>
          <form action="" className="form-form" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-description">
              <span>Найближчим часом наш менеджер зв'яжеться з Вами</span>
            </div>
            <div className="form-button">
              <button className="form-btn" type="submit">
                ЗАМОВИТИ
              </button>
            </div>
          </form>
        </div>
        <div className="form-item">
          <div className="form-img">
            <img className="form-images" src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
