import React, { useState, useContext } from "react";
import "./ProductCatalogFilter.css";
import { AppContext } from "../../Functional/App/App";

const ProductCatalogFilter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Витягуємо необхідні значення з контексту
  const {
    categories,
    searchTerm,
    handleSearch,
    producers,
    selectedProducers,
    choseCategory,
    choseProducer,
    showFunction,
  } = useContext(AppContext);

  return (
    <div className="filter-div">
      <ul className="list-group list-top">
        {categories.map((el) => (
          <li
            key={el.key}
            className="list-group-item list-item-filter-product hoverefect-category"
            onClick={() => choseCategory(el.key)}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <ul className="list-group" style={{ marginTop: "20px" }}>
        <div className="list-group-item list-item-filter-product list-item-filter">
          <span className="list-item-filter-name">Фільтр товарів</span>
          <input
            className="search-input-filterproduct"
            type="search"
            placeholder="пошук товару..."
            aria-label="Search"
            style={{ width: "250px", marginTop: "20px" }}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="list-item-filter-prices">
            <span className="list-item-filter-price">Ціна грн</span>
            <div className="filter-price">
              <label className="filter-price-label">
                <input
                  className="filter-price-input"
                  placeholder="ВІД"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </label>
              <label className="filter-price-label">
                <input
                  className="filter-price-input"
                  placeholder="ДО"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="list-item-producer">
            <span className="list-item-producer-name">Виробник</span>
            {producers.map((el) => (
              <div className="list-producer-filter" key={el.id}>
                <input
                  type="checkbox"
                  className="list-producer-filter-checkbox"
                  checked={selectedProducers.includes(el.name)}
                  onChange={() => choseProducer(el.name)}
                />
                <span className="list-producer-filter__producer">{el.name}</span>
              </div>
            ))}
          </div>
          <div className="list-item-novelty">
            <span className="list-item-novelty-name">Нові товари</span>
            <select className="list-item-novelty-select">
              {categories.map((el) => (
                <option key={el.key} onClick={() => choseCategory(el.key)}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="list-item-show">
            <button className="list-item-show-btn" onClick={showFunction}>
              Показати
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ProductCatalogFilter;