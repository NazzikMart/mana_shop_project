import React, { useContext } from "react";
import "./ServiceAndService.css";
import { AppContext } from "../../Functional/App/App";

const ServiceAndService = () => {
  // Витягуємо значення services з контексту за допомогою useContext
  const { services } = useContext(AppContext);

  return (
    <div className="services-product">
      <div className="services-product-name">Сервіси та послуги</div>
      <div className="services-product-items">
        {/* Відображаємо кожен елемент services */}
        {services.map((el) => (
          <div className="services-product-item" key={el.iconClass}>
            <i className={el.iconClass}></i>
            <p>{el.name}</p>
            <span>{el.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAndService;