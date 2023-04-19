import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (

    <div className="shop">
      <div className="addtoherosection">
    </div>
      <div className="shopTitle">
        <h4> GLA University Subway</h4>
        <h2>HERE YOU CAN FIND WHAT YOU WANT</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
