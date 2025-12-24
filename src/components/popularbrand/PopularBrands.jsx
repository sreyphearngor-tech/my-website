import React from "react";
import { Link } from "react-router-dom";
import brands from "../../data/Brands";
import "./Popularbrands.css";

export default function PopularBrands() {
  // Duplicate array → required for seamless scrolling
  const scrollBrands = [...brands, ...brands];

  return (
    <div className="popular-brands">
      <h2 className="popular-brands__title">Popular Brands</h2>

      <div className="marquee">
        <div className="marquee__inner">
          {scrollBrands.map((brand, index) => (
            <Link key={index} to={`/products/${brand.name}`} className="marquee__item">
              <img src={brand.img} alt={brand.name} className="marquee__logo" />
              <span className="marquee__label">{brand.name}</span>
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
}

