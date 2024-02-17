import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "../../UI/About/About";
import ProductCatalog from "../../UI/ProductCatalog/ProductCatalog";
import Contact from "../../UI/Contact/Contact";
import Besket from "../../UI/Besket/Besket";
import HomePage from "../../Functional/HomePage/HomePage";
import Profile from "../Profile/Profile";
import Product from "../Product/Product";
import Remont from "../../UI/Remont/Remont";
import User from "../User/User";
import Purchase from "../../UI/Purchase/Purchase";
import "./Navbar.css";
import { useContext } from 'react';
import { AppContext } from "../App/App";

const Navbar = () => {
  const { userData } = useContext(AppContext);

  return (
    <div className="navbar-wrapper">
      <header className="clearfix">
        <div className="container">
          <div className="header-left">
            <h1>
              <span className="header-logo">МаНа</span> - магазин цифрової техніки
            </h1>
          </div>
          <div className="header-right">
            <label htmlFor="open">
              <span className="hidden-desktop"></span>
            </label>
            <input type="checkbox" name="" id="open" />
            <nav>
              <Link to="/">Головна</Link>
              <Link to="/contact">Контакти</Link>
              <Link to="/catalog">Каталог товарів</Link>
              <Link to="/about">Про нас</Link>
              <Link to="/profile">Акунт</Link>
              <Link to="/besket">Кошик</Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="clearfix new-crearfix">
        <div className="container">
          <div className="section-left">
            <h1 className="section-title">
              В подарунок до Iphon 15 Pro Max отримую AirPods
            </h1>
          </div>
          <div className="section-right">
            <button className="learn-more">Отримати</button>
          </div>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/remont" element={<Remont />} />
        <Route path="/user" element={<User userData={userData} />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/besket" element={<Besket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Navbar;