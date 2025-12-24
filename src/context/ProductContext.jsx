
// src/context/ProductContext.jsx
import { createContext, useEffect, useState } from "react";
import product_data from "../data/products";

export const productContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(product_data);
  const [cart, setCart] = useState([]);
  const [invoice, setInvoice] = useState({ count: 0, subTotal: 0 });

  // Add to cart or increase quantity if exists
  const addCart = (product) => {
    setCart((oldCart) => {
      const existing = oldCart.find((p) => p.id === product.id);
      if (existing) {
        return oldCart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        return [...oldCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Increase quantity
  const increaseCartQuantity = (product) => {
    setCart((oldCart) =>
      oldCart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // Decrease quantity, remove if quantity reaches 0
  const decreaseCartQuantity = (product) => {
    setCart((oldCart) =>
      oldCart
        .map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Remove product completely
  const removeCart = (product) => {
    setCart((oldCart) => oldCart.filter((p) => p.id !== product.id));
  };
 

const filterProducts = (searchText = "", category = "") => {
  let text = searchText.toLowerCase().trim();
  let cat = category.toLowerCase().trim();

  let result = product_data;

  // Normalize search values
  if (text === "kid") text = "kid";
  if (cat === "kid") cat = "kid";

  // Exact category filter
  if (cat) {
    result = result.filter(p => p.category.toLowerCase() === cat);
  }

  // Search by name or caption OR exact category shortcut
  if (text) {
    // If search text matches category
    if (["men", "women", "kid"].includes(text)) {
      result = product_data.filter(p => p.category.toLowerCase() === text);
      setProducts(result);
      return;
    }

   
  }

  setProducts(result);
};


  // Update invoice whenever cart changes
  useEffect(() => {
    const newInvoice = { count: 0, subTotal: 0 };
    cart.forEach((product) => {
      newInvoice.count += product.quantity;
      newInvoice.subTotal += product.quantity * product.price;
    });
    setInvoice(newInvoice);
  }, [cart]);

  return (
    <productContext.Provider
      value={{
        products,
        filterProducts,
        addCart,
        cart,
        setCart,
        invoice,
        setInvoice,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCart,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
