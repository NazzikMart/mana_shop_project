import React from "react";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import Gadget from "../../UI/Gadget/Gadget.js";
import "./HomePage.css";
import NewsIphone from "../../UI/NewsIphone/NewsIphone.js";
import FormIphone from "../../UI/FormIphone/FormIphone.js";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <span className="BestSellersName">Лідери продажів</span>
      <BestSellers />
      <Gadget />

      <button className="btn-shop-ip">Замовити</button>
      <NewsIphone />
      <FormIphone/>
    </div>
  );
};

export default HomePage;
