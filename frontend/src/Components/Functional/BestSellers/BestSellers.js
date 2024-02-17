import React, { useState } from "react";
import "./BestSellers.css";
import "../../media.css";
import Card from "../../UI/Card/Card";

const BestSellers = (props) => {
  return (
    <div className="BestSellersWrapper">
      <div className="BestSellers">
        <Card />
      </div>
    </div>
  );
};

export default BestSellers;
