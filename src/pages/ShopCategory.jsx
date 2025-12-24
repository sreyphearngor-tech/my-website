
import React, { useContext } from "react";
import './ShopCategory.css';
import { ShopContext } from "../context/CartContext.jsx";
import { useParams } from "react-router-dom";
import product_data from "../data/product_data.js"; // make sure correct path

const ShopCategory = ({ banner }) => {
  const { addToCart } = useContext(ShopContext);
  const { category, sub } = useParams(); // <-- get dynamic route params

  // FILTERING
  const filteredProducts = product_data.filter((p) => {
    if (!sub) {
      // only category page
      return p.category === category;
    }
    // category + subcategory
    return p.category === category && p.subcategory === sub;
  });

  return (
    <div className="shop-category">
      <h2 className="category-title">
        {sub ? `${category.toUpperCase()} • ${sub.toUpperCase()}` : category.toUpperCase()}
      </h2>

      <img src={banner} alt={category} className="category-banner" />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h5>{product.name}</h5>
              <p>${product.price.toFixed(2)}</p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
