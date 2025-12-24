import React from "react";
import { production } from "../../assets/Production";
import { FaStar } from "react-icons/fa";


export default function Popular() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        POPULAR IN WOMEN
      </h2>

      <hr className="w-10 mx-auto mt-2 mb-8 border-gray-400" />

      {/* Grid same as NewCollection */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {production.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-3 sm:p-4 shadow-sm
                       transition-all duration-300
                       md:hover:scale-105 md:hover:shadow-xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[350px] h-65 sm:h-86 md:h-76 lg:h-90
                         object-cover rounded-lg"
            />

            {/* Name */}
            <p className="mt-3 font-semibold text-base sm:text-lg text-gray-800 line-clamp-2">
              {item.name}
            </p>

            {/* Caption */}
            <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">
              {item.caption}
            </p>

            {/* Stars */}
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
                ${item.new_price}
              </span>

              {item.old_price && (
                <span className="text-gray-400 line-through text-sm sm:text-md">
                  ${item.old_price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
