import { Route, Routes, Link } from "react-router-dom";
import About from "../Components/UI/About/About.js";
import ProductCatalog from "../Components/UI/ProductCatalog/ProductCatalog";
import Contact from "../Components/UI/Contact/Contact";
import Besket from "../Components/UI/Besket/Besket";
import HomePage from "../Components/Functional/HomePage/HomePage";
import Profile from "../Components/Functional/Profile/Profile.js";
import Remont from "../Components/UI/Remont/Remont";
import User from "../Components/Functional/User/User.js";
import Purchase from "../Components/UI/Purchase/Purchase";
import { useContext } from "react";
import { AppContext } from "../Components/Functional/App/App.js";
import Product from "../Components/UI/Product/Product.js";
import TechniquePage from "../Components/UI/TechniquePage/TechniquePage .js";
import ShopsPage from "../Components/UI/ShopsPage/ShopsPage.js";
import React from "react";
import DeliveryPage from "../Components/UI/Deliverypage/DeliveryPage .js";
import HelpPage from "../Components/UI/HelpPage/HelpPage .js";
import CreditPage from "../Components/UI/CreditPage/CreditPage .js";
import IphoneFree from "../Components/IphoneFree/IphoneFree.js";

export default function Routs() {
  const { userData } = useContext(AppContext);
  return (
    <div>
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
        <Route path="/productInfo" element={<Product />} />
        <Route path="/repair" element={<Remont />} />
        <Route path="/delivery" element={<DeliveryPage/>}/>
        <Route path="/technique" element={<TechniquePage/>}/>
        <Route path="/shops" element={<ShopsPage/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/credit" element={<CreditPage/>}/>
        <Route path="/iphonefree" element={<IphoneFree/>}/>
      </Routes>
    </div>
  );
}
