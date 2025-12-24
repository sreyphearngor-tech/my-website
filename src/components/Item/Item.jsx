import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../Item/item.css'
const Item = (props) => {
  const images = Array.isArray(props.images) && props.images.length > 0
    ? props.images
    : props.image
    ? [props.image]
    : [];

  const [index, setIndex] = useState(0);

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="
        bg-white rounded-xl p-3 sm:p-4
        shadow-sm cursor-pointer
        transition-all duration-300
        md:hover:scale-105 md:hover:shadow-xl
      "
    >
      {/* Image */}
      <div
        className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6"
        onClick={handleImageClick}
        aria-label="Product image, click to change"
      >
        <img
          src={images[index]}
          alt={`${props.name} ${index + 1}`}
          className="
            w-full
            h-full sm:h-56 md:h-64 lg:h-72
            object-contain rounded-lg select-none
          "
          draggable={false}
        />

        {/* Image index indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
            {index + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Product Name */}
      <p className="mt-3 font-semibold text-base sm:text-lg text-gray-800 line-clamp-2">
        {props.name}
      </p>

      {/* Caption */}
      <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">
        {props.caption}
      </p>

      {/* ⭐ Stars */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex text-yellow-400 text-sm sm:text-base">
          <FaStar /><FaStar /><FaStar /><FaStar />
          <FaStar className="text-gray-300" />
        </div>

        <span className="text-xs sm:text-sm text-gray-600">
          Review
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg sm:text-xl font-bold text-red-500">
          ${props.new_price}
        </span>

        {props.old_price && (
          <span className="text-gray-400 line-through text-sm sm:text-md">
            ${props.old_price}
          </span>
        )}
      </div>
    </div>
  );
};

export default Item;

