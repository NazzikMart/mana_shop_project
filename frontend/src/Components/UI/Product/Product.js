import "./Product.css";
import { useContext } from "react";
import { AppContext } from "../../Functional/App/App";

const Product = () => {
  const { searchTerm, searchResults, currentItems, addToOrder, infoProduct  , handleMoreInfoClick} =
  useContext(AppContext);
  console.log(infoProduct)
  return <div>
  </div>;
};

export default Product;
