import React, { useState } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import ip1 from "../../../img/ip1.jpg";
import ip2 from "../../../img/ip2.jpg";
import ip3 from "../../../img/ip13.jpg";
import ip4 from "../../../img/ip4.jpg";
import "./HomePage.css";
import "../../media.css";

const HomePage = () => {
  const [state, setState] = useState([
    { colorEN: "Gold", colorUA: "Золотий", img: ip1 },
    { colorEN: "Gray", colorUA: "Сірий", img: ip2 },
    { colorEN: "Purple", colorUA: "Фіолетовий", img: ip3 },
    { colorEN: "White", colorUA: "Білий", img: ip4 },
  ]);
  return (
    <div className="homepage-wrapper">
      <Header />
      <span className="BestSellersName">Лідери продажів</span>
      <FilterProduct />
      <BestSellers />
      <div className="product">
        <div className="product-title">ОБИРИ НОВИЙ ГАДЖЕТ</div>
        <div className="product-items">
          {state.map((el) => {
            return (
              <div className="product-item">
                <div className="product-item__img">
                  <img className="product-item__images" src={el.img} alt="" />
                </div>
                <div className="product-item__name">{el.colorEN}</div>
                <div className="product-item__desc">{el.colorUA}</div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn-shop-ip">Замовити</button>
    </div>
  );
};

export default HomePage;
