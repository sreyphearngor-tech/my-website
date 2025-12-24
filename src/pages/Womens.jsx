
import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductAll } from "../assets/ProductAll";

const Womens = () => {
  const womenProducts = ProductAll.filter(item => item.category === "women");

  return (
    <div className="product-page">
      <img src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg" alt="" />
      <h1>Women Products</h1>
      <div className="product-container">
        {womenProducts.map(item => (
            <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Womens;


