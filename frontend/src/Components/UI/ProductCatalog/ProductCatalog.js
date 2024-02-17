import React from "react";
import "./ProductCatalog.css";
import ProductCatalogFilter from "../ProductCatalogFilter/ProductCatalogFilter.js";
import ProductCatalogSort from "../ProductCatalogSort/ProductCatalogSort.js";
import Card from "../Card/Card.js";
import ServiceAndService from "../ServiceAndService/ServiceAndService.js";


const ProductCatalog = (props) => {
  return (
    <React.Fragment>
      <div className="product-catalog-wrapper-osn">
        <ServiceAndService services={props.services} />
        <div className="product-catalog-wrapper">
          <div className="product-catalog">
            <div className="product-catalog-name">Каталог товарів</div>
            <ProductCatalogSort renderCart={props.renderCart} />
            <Card
              searchTerm={props.searchTerm}
              searchResults={props.searchResults}
              addClass={props.addClass}
              addToOrder={props.addToOrder}
              infoProduct={props.infoProduct}
              currentItems={props.currentItems}
              choseProducer={props.choseProducer}
              renderCart={props.renderCart}
              product={props.product}
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
              infoProducts={props.infoProducts}
              services={props.services}
              categories={props.categories}
              minPrice={props.minPrice}
              maxPrice={props.maxPrice}
              producers={props.producers}
              selectedProducers={props.selectedProducers}
              showFunction={props.showFunction}
              choseCategory={props.choseCategory}
              handleSearch={props.handleSearch}
            />
          </div>
          <ProductCatalogFilter
            categories={props.categories}
            minPrice={props.minPrice}
            maxPrice={props.maxPrice}
            producers={props.producers}
            selectedProducers={props.selectedProducers}
            showFunction={props.showFunction}
            choseCategory={(category) =>
              props.choseCategory(category, props.product.heading)
            }
            searchTerm={props.searchTerm}
            handleSearch={props.handleSearch}
            choseProducer={props.choseProducer}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCatalog;
