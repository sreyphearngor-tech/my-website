
import React from "react";
import { NavLink } from "react-router-dom";
import new_collection from "../../assets/new_collection";
import { FaStar, FaSearchPlus } from "react-icons/fa";
const NewCollection = () => {
  return (
    <div className="w-full min-h-screen py-8 px-4">
      <h1 className="text-3xl md:text-4xl text-center font-semibold mt-4">
        NEW COLLECTION
      </h1>


      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">

        {new_collection.map((item) => (
          <NavLink

            key={item.id}
            to={`/detailproduct/${item.id}`}
            className="relative bg-white h-full rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition duration-300 card"
          >
            {/* Image with Zoom on Hover */}
            <div className="overflow-hidden relative group">
              <img
                src={item.image}
                alt={item.brand}
                className="w-[360px] h-70 sm:h-75  md:h-92 lg:h-86 object-cover
             transition-transform duration-500 group-hover:scale-110"
              />


              <p className="absolute top-3 right-3 bg-red-700 text-sm sm:text-base
              text-white font-medium px-3 py-1 rounded-lg shadow-md">
                {item.pro}
              </p>


            </div>

            {/* Product Info */}
            <div className="p-4 text-center para ">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 text-left px-2">
                {item.brand}
              </h4>
              {/* ⭐ Stars + Review */}
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  <FaStar /><FaStar /><FaStar /><FaStar />
                  <FaStar className="text-gray-300" />
                </div>

                <span className="text-xs sm:text-sm text-gray-600">
                  Product Review
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-red-500 mt-6 text-left px-2">
                ${item.new_price}
              </p>


            


            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
