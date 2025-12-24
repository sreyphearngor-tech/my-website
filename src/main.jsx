import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";

import App from './App.jsx';
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsByBrand from "./pages/ProductsByBrand";
import DetailProduct from "./Router/DetailProduct";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import NewLetter from "./components/NewLetter/NewLetter";
import Success from "./pages/Success";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path=":category" element={<Products />} />
            <Route path=":category/:subcategory" element={<Products />} />
            <Route path="products/:brand" element={<ProductsByBrand />} />
            <Route path="detailproduct/:id" element={<DetailProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<LoginSignup />} />
            <Route path="newletter" element={<NewLetter />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProductContextProvider>
  </React.StrictMode>
);
