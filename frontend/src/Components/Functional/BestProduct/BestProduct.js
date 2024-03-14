import React from "react";
import "./BestProduct.css";
import { useContext } from "react";
import { AppContext } from "../App/App";
import best from '../../../json/best.json'

export default function BestProduct() {
  const { searchTerm, searchResults, currentItems } = useContext(AppContext);
  return (
    <div className="product-best-catalog">
      {/* Перевіряємо, чи є результати пошуку */}
      {searchTerm !== ""
        ? best.prod.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
              </div>
            </div>
          ))
        : best.prod.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
              </div>
            </div>
          ))}
    </div>
  );
}
