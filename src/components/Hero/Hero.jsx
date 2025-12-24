
import React from "react";
import tech3 from "../../assets/images/tech3.mp4"; // 📌 correct path
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/"); // Navigate to Home
  };

  return (
    <div className="relative w-[100%] h-screen overflow-hidden mt-30">

      {/* 🎥 Background Video */}
      <video
        className="absolute  w-full h-full object-cover"
        src={tech3}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 📝 Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold text-white drop-shadow-lg 
          animate-fade-in-up
        ">
          New Fashion Collection
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 animate-fade-in-up delay-200">
          Trending Styles for Everyone
        </p>

        <button
          onClick={handleShopNow}
          className="
            mt-8 bg-pink-600 hover:bg-pink-700 
            text-white font-semibold rounded-lg 
            px-8 py-3 transition duration-300 
            animate-fade-in-up delay-400
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
