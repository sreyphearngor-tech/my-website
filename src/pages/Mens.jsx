
import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductAll } from "../assets/ProductAll";

const Mens = () => {
  const menProducts = ProductAll.filter(item => item.category === "men");

  return (
    <div className="product-page">
      <h1>Men Products</h1>
      <div className="product-container">
        {menProducts.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Mens;

