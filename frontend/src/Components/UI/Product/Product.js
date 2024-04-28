import "./Product.css";
import { useContext } from "react";
import { AppContext } from "../../Functional/App/App";

const Product = () => {
  const { searchTerm, searchResults, currentItems, addToOrder, infoProduct  , handleMoreInfoClick} =
  useContext(AppContext);
  console.log(infoProduct)
  return <div className="product-info__card">
        {currentItems.map((el) =>{
            <div>{el.name}</div>
        })}
  </div>;
};

export default Product;
