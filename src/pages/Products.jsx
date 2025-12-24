

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/ProductContext";

const Products = () => {
  const { products, filterProducts, addCart } = useContext(productContext);
  const { category } = useParams();
  

  useEffect(() => {
    filterProducts(category);
  }, [category]);

  if (!products) return <h1 className="text-center py-10">Loading...</h1>;

  // Banner images for each category
  const banners = {
    women: "https://i.pinimg.com/1200x/5f/3f/42/5f3f42860d346c4f4f216ac0cc285efc.jpg",
    men: "https://cdn.shopify.com/s/files/1/0865/4176/2853/files/BlogBanner_442e81d3-e9ef-46d3-bd47-15547ee46e03.jpg?v=1735304454",
    kid: "https://i.pinimg.com/1200x/5d/ba/b4/5dbab4f56d15b5bdfdefbc6541654159.jpg",
  };

  return (
    <div className="my-5">
      
      {/* Banner Section */}
      {banners[category] && (
        <img
          src={banners[category]}
          alt={`${category} banner`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[420px]
                   object-cover "
        />
      )}

      {/* Products Section */}
      {products.length === 0 ? (
        <p className="text-center text-red-500 font-semibold text-lg mt-4">
          No product available
        </p>
      ) : (
        <div className="flex flex-wrap gap-6 items-start justify-center px-4 py-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-[300px] h-full sm:h-[300px] md:h-[300px] lg:h-full bg-white rounded-2xl shadow hover:shadow-2xl transition duration-200 overflow-hidden object-contain placeholder-blue-50"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div className="p-3 text-center">
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-red-600 font-medium">${item.price}</p>
                <p className="text-gray-500 text-sm">{item.caption}</p>
              </div>
              
              <button
                onClick={() =>    addCart({
                    ...item,
                    new_price: Number(item.price) // convert to number
                  })}
                className="bg-black text-white py-2 w-full rounded-b-lg hover:bg-gray-400 transition"
              >
                + Add To Card
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Products;
