import React from "react";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import Gadget from "../../UI/Gadget/Gadget.js";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <span className="BestSellersName">Лідери продажів</span>
      <BestSellers />
      <Gadget /> 
      <button className="btn-shop-ip">Замовити</button>
    </div>
  );
};

export default HomePage;
