
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import App from './App.jsx';

import "./index.css"; // <-- Tailwind imported here
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import NewLetter from "./components/NewLetter/NewLetter";
import ProductsByBrand from "./pages/ProductsByBrand";
import DetailProduct from "./Router/DetailProduct";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { index: true, element: <Home/> },
    
     { path: ":category", element: <Products /> },
     { path: ":category/:subcategory", element: <Products /> },
     { path: "products/:brand", element: <ProductsByBrand /> }, 
      { path: "detailproduct/:id",element: <DetailProduct />},
      
     { path: "cart", element: <Cart /> },
     { path: "login", element: <LoginSignup/> },
     { path: "newletter", element: <NewLetter/> },


      { path: "success", element: <Success /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  </React.StrictMode>
);
