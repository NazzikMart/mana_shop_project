import React, { Fragment } from "react";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import Gadget from "../../UI/Gadget/Gadget.js";
import "./HomePage.css";
import NewsIphone from "../../UI/NewsIphone/NewsIphone.js";
import Dostavka from "../../UI/Dostavka/Dostavka.js";
import Reviews from "../../UI/Reviews/Reviews.js";
import HomeForm from "../../UI/HomeForm/HomeForm.js";

const HomePage = () => {
  return (
    <Fragment className="homepage-wrapper">
      <Header />
      <span className="BestSellersName">Лідери продажів</span>
      <BestSellers />
      <span className="BestSellersName">Нові поставки</span>
      <BestSellers />
      <Gadget />
      <NewsIphone />
      <Dostavka />
      <Reviews />
      <HomeForm />
    </Fragment>
  );
};

export default HomePage;
