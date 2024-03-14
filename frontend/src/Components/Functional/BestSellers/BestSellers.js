import "./BestSellers.css";
import BestProduct from "../BestProduct/BestProduct";

const BestSellers = (props) => {
  return (
    <div className="BestSellersWrapper">
      <div className="BestSellers">
        <BestProduct />
      </div>
    </div>
  );
};

export default BestSellers;
