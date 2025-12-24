
// src/context/ShopContext.jsx
import React, { createContext, useState } from "react";

// 1. Create the context
export const ShopContext = createContext();

// 2. Create the provider
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
