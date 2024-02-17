import React, { useContext } from "react";
import { AppContext } from "../App/App";
import "./FilterProduct.css";

const FilterProduct = () => {
  // Витягуємо значення контексту за допомогою useContext
  const { categories, choseCategory } = useContext(AppContext);

  return (
    <div className="FilterProduct">
      {categories.map((item) => (
        <span
          className="category-item"
          key={item.key}
          onClick={() => choseCategory(item.key)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default FilterProduct;