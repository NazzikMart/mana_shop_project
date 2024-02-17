import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Besket.css";
import { AppContext } from "../../Functional/App/App";

const Besket = () => {
  // Витягуємо необхідні значення з контексту
  const {
    orders,
    totalCost,
    incrementCounter,
    decrementCounter,
    handleRemoveProduct,
  } = useContext(AppContext);

  return (
    <div className="beskett">
      <span className="besket-name">Кошик з товарами</span>

      <div className="filterr">
        <span className="filter-item">Назва</span>
        <span className="filter-item">Кількість</span>
        <span className="filter-item">Вартість</span>
      </div>

      {orders.map((item) => (
        <div className="besket-products" key={item.id}>
          <div className="besket-product">
            <div className="besket-product-names">
              <img src={item.img} className="besket-product-img" alt="" />
              <span className="besket-product-name">{item.name}</span>
            </div>

            <div className="besket-count">
              <span className="besket-count-item">{item.counter}</span>
              <div className="besket-counter">
                <span
                  className="besket-counter-plus"
                  onClick={() => incrementCounter(item.id)}
                >
                  +
                </span>
                <span
                  className="besket-counter-minus"
                  onClick={() => decrementCounter(item.id)}
                >
                  -
                </span>
              </div>
            </div>
            <div className="besket-price">{item.price} грн</div>
            <div
              className="delete-product"
              onClick={() => handleRemoveProduct(item.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      ))}

      <div className="all-price">
        <span className="all-price-text"> Загальна сума : </span>
        <span className="all-price-total">{totalCost} грн</span>
      </div>
      <div className="order-product-besket-btn">
        <Link to="/purchase" className="order-product-besket-button">
          Замовити
        </Link>
      </div>
    </div>
  );
};

export default Besket;