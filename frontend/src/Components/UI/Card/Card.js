import React, { useContext } from "react";
import "./Card.css";
import { AppContext } from "../../Functional/App/App";

const Card = () => {
  // Витягуємо значення контексту за допомогою useContext
  const { searchTerm, searchResults, currentItems, addToOrder } =
    useContext(AppContext);

  return (
    <React.Fragment>
      <div className="product-catalog-items">
        <div className="product-items-catalog">
          {/* Перевіряємо, чи є результати пошуку */}
          {searchTerm !== ""
            ? searchResults.map((item) => (
                <div className="product-card" key={item.id}>
                  <img
                    src={item.img}
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-description">{item.model}</p>
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
                    </div>
                  </div>
                </div>
              ))
            : currentItems.map((item) => (
                <div className="product-card" key={item.id}>
                  <img
                    src={item.img}
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-model">{item.model}</p>
                    <p className="product-price">
                      Ціна: <span>{item.price}</span> грн
                    </p>
                    <p className="product-description">{item.description}</p>
                    <div className="button-container">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToOrder(item)}
                      >
                        Додати до кошика
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
