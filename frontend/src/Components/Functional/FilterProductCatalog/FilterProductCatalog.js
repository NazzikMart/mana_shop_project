import React from 'react'
import './FilterProductCatalog.css'
import { useContext } from 'react';
import { AppContext } from '../App/App';

export default function FilterProductCatalog() {
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
  )
}
