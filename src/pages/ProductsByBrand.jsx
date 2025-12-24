
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BrandProduct } from "../data/BrandProduct";
import { productContext } from "../context/ProductContext";

export default function ProductsByBrand() {
  const { addCart } = useContext(productContext);
  const { brand } = useParams();

  const filteredProducts = brand
    ? BrandProduct.filter(
        (p) => p.category.trim().toLowerCase() === brand.toLowerCase()
      )
    : BrandProduct;

  if (!filteredProducts.length) {
    return (
      <h2 className="text-center text-xl font-medium mt-10">
        No products found for "{brand}"
      </h2>
      
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="overflow-hidden ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 font-medium mb-2">${product.price}</p>
            <button
              onClick={() => addCart(product)}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              🛒 Add to Card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
