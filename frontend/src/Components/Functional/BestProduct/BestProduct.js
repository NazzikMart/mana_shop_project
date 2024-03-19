import React from "react";
import "./BestProduct.css";
import { useContext } from "react";
import { AppContext } from "../App/App";
import best from '../../../json/best.json'
import { Link } from "react-router-dom";

export default function BestProduct() {
  
  const { searchTerm, searchResults, currentItems , addToOrder  , handleMoreInfoClick} = useContext(AppContext);
  return (
    <div className="product-best-catalog">
      {/* Перевіряємо, чи є результати пошуку */}
      {searchTerm !== ""
        ? best.prod.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
                <p className="best-description">{item.model}</p>
                <p className="product-price">
                      Ціна: <span>{item.price}</span> грн
                    </p>
                    <div className="button-container">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToOrder(item)}
                      >
                        Додати до кошика
                      </button>

                      <Link
                        to="/productInfo"
                        className="add-to-cart-btn"
                        onClick={() => handleMoreInfoClick(item)}
                      >
                        Більше про товар
                      </Link>
                    </div>
              </div>
            </div>
          ))
        : best.prod.map((item) => (
            <div className="best-card" key={item.id}>
              <img src={item.img} alt="Product Image" className="best-image" />
              <div className="best-info">
                <h2 className="best-title">{item.name}</h2>
                <p className="best-description">{item.model}</p>
                <p className="product-price">
                      Ціна: <span>{item.price}</span> грн
                    </p>
                    <div className="button-container">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToOrder(item)}
                      >
                        Додати до кошика
                      </button>

                      <Link
                        to="/productInfo"
                        className="add-to-cart-btn"
                        onClick={() => handleMoreInfoClick(item)}
                      >
                        Більше про товар
                      </Link>
                    </div>
              </div>
            </div>
          ))}
    </div>
  );
}
