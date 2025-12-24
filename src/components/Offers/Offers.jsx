import React from "react";

const Offers = () => {
  return (
    <div className="w-full mt-12 flex justify-center px-3">
      <div className="
        relative w-full max-w-5xl 
        h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px] 
        rounded-xl overflow-hidden shadow-lg
      ">

        {/* 🔥 Background GIF */}
        <img
          src="https://i.pinimg.com/originals/0a/b2/cb/0ab2cb3d634f15ff0142c2fc5b1f9aea.gif"
          className="absolute inset-0 w-full h-full object-cover"
          alt="offer background"
        />

        {/* 🖤 Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✨ Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">

          <h1 className="
            text-white font-extrabold tracking-wide
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            animate-fade-up
          ">
            Special Offers
          </h1>

          <p className="
            text-white mt-3 opacity-90 
            text-sm sm:text-base md:text-lg
            animate-fade-up delay-300
          ">
            Best Deals Just For You
          </p>

          <button
            className="
              mt-6 px-6 py-2 rounded-lg 
              bg-pink-500 hover:bg-pink-600 
              text-white font-semibold shadow-lg
              transition duration-300
              animate-fade-up delay-500
            "
          >
            Shop Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default Offers;
