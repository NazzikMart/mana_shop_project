import React, { useContext } from "react";
import "./ServiceAndService.css";
import { AppContext } from "../../Functional/App/App";
import { Link } from "react-router-dom";

const ServiceAndService = () => {
  // Витягуємо значення services з контексту за допомогою useContext
  const { services } = useContext(AppContext);

  return (
    <div className="services-product">
      <div className="services-product-name">Сервіси та послуги</div>
      <div className="services-product-items">
        <Link
          to={"/delivery"}
          className="services-product-item"
          key={services[0].iconClass}
        >
          <i className={services[0].iconClass}></i>
          <p>{services[0].name}</p>
          <span>{services[0].description}</span>
        </Link>
        <Link
          to={"/technique"}
          className="services-product-item"
          key={services[1].iconClass}
        >
          <i className={services[1].iconClass}></i>
          <p>{services[1].name}</p>
          <span>{services[1].description}</span>
        </Link>
        <Link
          to={"/repair"}
          className="services-product-item"
          key={services[2].iconClass}
        >
          <i className={services[2].iconClass}></i>
          <p>{services[2].name}</p>
          <span>{services[2].description}</span>
        </Link>
        <Link
          to={"/shops"}
          className="services-product-item"
          key={services[3].iconClass}
        >
          <i className={services[3].iconClass}></i>
          <p>{services[3].name}</p>
          <span>{services[3].description}</span>
        </Link>
        <Link
          to={"/help"}
          className="services-product-item"
          key={services[4].iconClass}
        >
          <i className={services[4].iconClass}></i>
          <p>{services[4].name}</p>
          <span>{services[4].description}</span>
        </Link>
        <Link
          to={"/credit"}
          className="services-product-item"
          key={services[5].iconClass}
        >
          <i className={services[5].iconClass}></i>
          <p>{services[5].name}</p>
          <span>{services[5].description}</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceAndService;
