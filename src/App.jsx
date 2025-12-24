
import React, { useContext } from "react";

import Navbarp from "./components/Navbarp";
import { productContext } from "./context/ProductContext";
import Home from "./pages/Home";

import PopularBrands from "./components/popularbrand/PopularBrands";
import ProductsByBrand from "./pages/ProductsByBrand";
import { Outlet } from "react-router-dom";
import DetailProduct from "./Router/DetailProduct";
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'

function App() {


  return (
    
    <div className="h-auto bg-slate-100">
 
      <Navbarp />
   
    <Outlet/>
  
   

  
   
    </div>
  );
}

export default App;

