import React, { useState } from "react";
import "./BestSellers.css";
import Card from "../../UI/Card/Card";
import BestProduct from "../BestProduct/BestProduct";

const BestSellers = (props) => {
  return (
    <div className="BestSellersWrapper">
      <div className="BestSellers">
        <BestProduct />
      </div>
    </div>
  );
};

export default BestSellers;
