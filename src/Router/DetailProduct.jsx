
import React, { useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import new_collection from "../assets/new_collection";
import { productContext } from "../context/ProductContext";
import { FaStar } from "react-icons/fa";

const DetailProduct = () => {
  const { id } = useParams();
  const { addCart } = useContext(productContext);
  const item = new_collection.find((p) => p.id == id);

  const [selectedSize, setSelectedSize] = useState(null);

  if (!item)
    return <p className="text-center mt-10 text-xl">Product not found</p>;

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }

    addCart({ ...item, selectedSize });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:gap-10 gap-6 bg-white shadow-lg rounded-2xl p-5 border border-gray-200">

        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 sm:w-[50%]">
          <img
            className="w-full h-auto rounded-xl object-cover shadow-md "
            src={item.image}
            alt={item.brand}
          />
            <p className="absolute bg-red-700 sm:text-lg sm:left-[50%] lg:left-[80%] md:left-[80%] sm:top-[20px] md:top-[20px] lg:top-[20px] text-sm top-[20px] left-[80%] text-white font-medium w-[80px] sm:w-[80px] md:w-[80px] lg:w-[80px] text-center pb-2 shadow-md rounded-lg">{item.pro}</p>
        </div>
         
        {/* Right: Details */}
        <div className="relative  w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">{item.brand}</h1>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-yellow-400 text-xl">
                <FaStar /><FaStar /><FaStar /><FaStar />
                <FaStar className="text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">Product Review</span>
            </div>

            {/* Price */}
            <h3 className="text-2xl font-semibold text-red-600 mt-4 mb-2">
              Price: ${item.new_price}
            </h3>

            {/* Size Selection */}
            <p className="text-lg font-semibold mt-4 mb-2">Select Size:</p>

            <div className="flex gap-3 flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-lg transition-all 
                    ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-400 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 mt-4">{item.dis}</p>
        
          </div>

          {/* Add to Cart + Back */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2.5 text-lg rounded-lg hover:bg-pink-700 transition-all"
            >
              Add To Cart
            </button>

            <NavLink
              to="/"
              className="bg-blue-600 text-white text-center py-2.5 rounded-lg hover:bg-blue-700 transition-all"
            >
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
