
import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";

const SearchProduct = () => {
  const { products, filterProducts } = useContext(productContext);

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          onClick={() => filterProducts("Women")}
        >
          Women
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => filterProducts("Men")}
        >
          Men
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => filterProducts("Kid")}
        >
          Kid
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          onClick={() => filterProducts("")} // Show all products
        >
          All
        </button>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg p-4 rounded-lg hover:shadow-xl transition bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            <p className="text-lg font-semibold mt-2">{product.name}</p>
            <p className="text-sm text-gray-600">{product.caption}</p>
            <p className="text-blue-900 font-bold mt-1">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 text-right text-xl font-bold text-green-700">
        Total Price: ${totalPrice}
      </div>
    </div>
  );
};

export default SearchProduct;
