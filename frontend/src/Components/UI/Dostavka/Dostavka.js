import React from "react";
import "./Dostavka.css";
import nova from "../../../img/Без названия.png";
import ukr from '../../../img/20231101153159-3402.jpg'
import meest from '../../../img/Без 1(1).png'

export default function Dostavka() {
  return (
    <div className="distavka">
      <div className="dostavka-header">
        <p className="dostavka-logo">Остані доставки</p>
        {/* <p>Всі приклади доставок</p> */}
      </div>
      <div className="dostavka-item">
        <img src={nova}></img>
        <p>Нова пошта - Тернопіль</p>
        <p>
          <p>Надіслано</p>
          <span>15.01.2021 13:27</span>
        </p>
        <p>
          <p>Отримано</p>
          <span>19.01.2021 09:20</span>
        </p>
        <p>
          <p>В дорозі</p>
          <span>2 дня</span>
        </p>
      </div>
      <div className="dostavka-item">
        <img src={ukr}></img>
        <p>Укр пошта - Тернопіль</p>
        <p>
          <p>Надіслано</p>
          <span>15.01.2021 13:27</span>
        </p>
        <p>
          <p>Отримано</p>
          <span>19.01.2021 09:20</span>
        </p>
        <p>
          <p>В дорозі</p>
          <span>2 дня</span>
        </p>
      </div>
      <div className="dostavka-item">
        <img src={meest}></img>
        <p>Meest пошта - Тернопіль</p>
        <p>
          <p>Надіслано</p>
          <span>15.01.2021 13:27</span>
        </p>
        <p>
          <p>Отримано</p>
          <span>19.01.2021 09:20</span>
        </p>
        <p>
          <p>В дорозі</p>
          <span>2 дня</span>
        </p>
      </div>
    </div>
  );
}
