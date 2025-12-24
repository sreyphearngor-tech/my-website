
import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductAll } from "../assets/ProductAll";

const Shop = () => {
  return (
    <div className="product-page">
      <h1>All Products</h1>
      <div className="product-container">
        {ProductAll.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
