import React, { createContext, useState } from "react";
import { ProductAll } from "../assets/ProductAll";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  // Cart items stored as { productId: quantity }
  const [cartItems, setCartItems] = useState({});

  // Add product to cart
  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  // Decrease product quantity
  const decreaseQty = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;
      if (prev[id] === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[id];
        return updatedCart;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  // Calculate total price
  const getTotalAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = ProductAll.find((item) => item.id === Number(id));
      if (product) total += product.price * cartItems[id];
    }
    return total;
  };

  const value = {
    ProductAll,
    cartItems,
    addToCart,
    decreaseQty,
    removeFromCart,
    getTotalAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
