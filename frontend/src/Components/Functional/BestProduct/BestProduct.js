import React from "react";
import "./BestProduct.css";
import { useContext } from "react";
import { AppContext } from "../App/App";

export default function BestProduct() {
  const { searchTerm, searchResults, currentItems } = useContext(AppContext);
  return (
    <div className="product-best-catalog">
      {/* Перевіряємо, чи є результати пошуку */}
      {searchTerm !== ""
        ? searchResults.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
                <p className="best-description">{item.model}</p>
                <p className="best-price">
                </p>
              </div>
            </div>
          ))
        : currentItems.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
                <p className="best-model">{item.model}</p>
                <p className="best-price">
                </p>
                <p className="best-description">{item.description}</p>
              </div>
            </div>
          ))}
    </div>
  );
}
