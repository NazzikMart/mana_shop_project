import React from "react";
import "./User.css";
import { useState } from "react";

const User = () => {
  const [hobby, setHobby] = useState("");
  const [auto, setAuto] = useState("");

  function addHobby() {
    let hoby = prompt("Яке ваще хобі?");
    setHobby(hoby);
  }
  function addAuto() {
    let avto = prompt("Напишіть марку вашого авто ");
    setAuto(avto);
  }
  return (
    <div className="user-wrapper">
      <div className="user-left-menu">
        <div className="left-menu-items">
          <ul className="list-group list-group-users">
            <li className="list-group-item list-group-item__user list-group-item__user-btn-logout">
              Вийти
            </li>
          </ul>
        </div>
      </div>
      <div className="user-information">
        <div className="user-informatio-header">
          <div className="user-informatio-header__img">
            <img
              className="user-informatio-header__images"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rH4ct04iqb8ANeaWu8Sz7Eg4LDSLnL735g&usqp=CAU"
              alt="user-avatar"
            />
          </div>
          <div className="user-informatio-header__name">
            Назар, <br /> вітаємо у магазині Сота
          </div>
        </div>
        <div className="user-information-info-items">
          <span className="user-information-info-item__name">Назар</span>
          <div className="user-information-info-items__number user-information-info-items__item">
            <span className="user-information-info-item__number-name">
              Номер телефону :{" "}
            </span>
            <span className="user-information-info-item__number-desc">
              0974613997
            </span>
          </div>
          <div className="user-information-info-items__sex user-information-info-items__item">
            <span className="user-information-info-item__sex-name">
              Стать :{" "}
            </span>
            <span className="user-information-info-item__sex-desc">
              Чоловіча
            </span>
          </div>
          <div className="user-information-info-items__birthday user-information-info-items__item">
            <span className="user-information-info-item__birthday-name">
              Дата народження:{" "}
            </span>
            <span className="user-information-info-item__birthday-desc">
              17.05.2023
            </span>
          </div>
          <div className="user-information-info-items__email user-information-info-items__item">
            <span className="user-information-info-item__email-name">
              Електрона адреса :{" "}
            </span>
            <span className="user-information-info-item__email-desc">
              nazzikmart@gmail.com
            </span>
          </div>
          {hobby ? (
            <div className="user-information-info-items__email user-information-info-items__item">
              <span className="user-information-info-item__email-name">
                Хобі :{" "}
              </span>
              <span className="user-information-info-item__email-desc">
                {hobby}
              </span>
            </div>
          ) : null}
          {auto ? (
            <div className="user-information-info-items__email user-information-info-items__item">
              <span className="user-information-info-item__email-name">
                Мій автомобіль :{" "}
              </span>
              <span className="user-information-info-item__email-desc">
                {auto}
              </span>
            </div>
          ) : null}
        </div>
        <div className="user-information-details-items">
          <div className="user-information-details-item__hobby">
            <h1 className="user-information-details-item__hobby-name">Хобі</h1>
            <span className="user-information-details-item__hobby-desc">
              Вкажіть чим ви цікавитеся і ми будемо пропонувати найкраще та
              найкорисніше саме для вас.
            </span>
            <button
              className="user-information-details-item__hobby-btn"
              onClick={addHobby}
            >
              Додати хобі
            </button>
          </div>

          <div className="user-information-details-item__car">
            <h1 className="user-information-details-item__car-name">Авто</h1>
            <span className="user-information-details-item__car-desc">
              Чи маєте авто?
            </span>
            <button
              className="user-information-details-item__car-btn"
              onClick={addAuto}
            >
              В мене є авто
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
