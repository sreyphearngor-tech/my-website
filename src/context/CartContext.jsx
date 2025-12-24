import React, { createContext, useState } from "react";

// Create context
export const ShopContext = createContext();

// Provider component
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const value = { cartItems, addToCart };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
