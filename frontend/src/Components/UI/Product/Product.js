import "./Product.css";
import { useContext } from "react";
import { AppContext } from "../../Functional/App/App";

const Product = () => {
  const { selectedItem } =
  useContext(AppContext);
  return <div className="product-info__card">
 
  {selectedItem.map((el) =>{
     return (
      <div>
          {el}
      </div>
     )
  })}
 
  </div>;
};

export default Product;
