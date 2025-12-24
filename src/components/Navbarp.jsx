

import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { products_categories } from "../data/Products";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { productContext } from "../context/ProductContext";
import LoginModal from "../components/LoginModal";

const Navbarp = () => {
  const { invoice, filterProducts } = useContext(productContext);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();


const handleSearch = (searchText = search, categoryText = selectedCategory) => {
  filterProducts(searchText, categoryText);
  navigate("/Product"); // go to main products page
};


  const isActive = ({ isActive }) =>
    isActive ? "text-red-600 font-bold" : "hover:text-red-500";

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6 py-4 flex items-center justify-between relative">
      {/* LEFT: LOGO */}
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="https://i.pinimg.com/1200x/12/97/4f/12974f545d0d7184cc9697f07e6dec0e.jpg"
          alt="Logo"
          className="h-14 w-[90px] object-cover rounded-lg"
        />
      </NavLink>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-600">
        <li className="bg-blue-600 px-3 py-1 text-white rounded">
          <NavLink to="/" className="hover:underline">Home</NavLink>
        </li>

        {/* SHOP DROPDOWN */}
        <li className="relative group">
          <button className="bg-blue-600 px-3 py-1 rounded text-white">Shop</button>
          <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white p-6 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-3 gap-6 min-w-[300px] lg:min-w-[600px] z-50">
            {/* WOMEN */}
            <div>
              <h3 className="font-semibold text-red-400 mb-2">WOMEN</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/women" className="hover:bg-slate-700 px-3 py-1 rounded block">All Women</Link></li>
                <li><Link to="/women/dress" className="hover:bg-slate-700 px-3 py-1 rounded block">Dresses</Link></li>
                <li><Link to="/women/tops" className="hover:bg-slate-700 px-3 py-1 rounded block">Tops</Link></li>
                <li><Link to="/women/bottoms" className="hover:bg-slate-700 px-3 py-1 rounded block">Bottoms</Link></li>
              </ul>
            </div>

            {/* MEN */}
            <div>
              <h3 className="font-semibold text-red-400 mb-2">MEN</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/men" className="hover:bg-slate-700 px-3 py-1 rounded block">All Men</Link></li>
                <li><Link to="/men/shirts" className="hover:bg-slate-700 px-3 py-1 rounded block">Shirts</Link></li>
                <li><Link to="/men/jackets" className="hover:bg-slate-700 px-3 py-1 rounded block">Jackets</Link></li>
                <li><Link to="/men/accessories" className="hover:bg-slate-700 px-3 py-1 rounded block">Accessories</Link></li>
              </ul>
            </div>

            {/* KIDS */}
            <div>
              <h3 className="font-semibold text-red-400 mb-2">KIDS</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/kid" className="hover:bg-slate-700 px-3 py-1 rounded block">All Kids</Link></li>
                <li><Link to="/kids/jeans" className="hover:bg-slate-700 px-3 py-1 rounded block">Jeans</Link></li>
                <li><Link to="/kids/dresses" className="hover:bg-slate-700 px-3 py-1 rounded block">Dresses</Link></li>
              </ul>
            </div>
          </div>
        </li>

      {/* CONTACT DROPDOWN */}
<li className="relative group">
  <button
    className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700 transition"
  >
    Contact
  </button>

  {/* Dropdown menu */}
  <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-50">
    <h3 className="font-semibold text-red-400 mb-2">Contact</h3>
    <ul className="space-y-2 text-sm">
    
      <li
        className="hover:bg-slate-700 px-3 py-1 rounded block cursor-pointer"
        onClick={() => setShowLogin(true)} // Open Login/Signup modal
      >
        Login / Sign Up
      </li>
    </ul>
  </div>
</li>

{/* Render modal */}
{showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      </ul>
  <div className="hidden md:flex items-center gap-2">
  {/* Category Dropdown */}
  <select
    value={selectedCategory}
    onChange={(e) => {
      const category = e.target.value;
      setSelectedCategory(category);
      handleSearch(search, category); // live update when category changes
    }}
    className="px-2 py-2 bg-gray-100 border rounded-lg"
  >
    <option value="">All Categories</option>
    {products_categories.map((cat) => (
      <option key={cat.value} value={cat.value}>
        {cat.label}
      </option>
    ))}
  </select>

  {/* Search Input */}
  <div className="flex items-center border rounded-lg bg-gray-100 overflow-hidden">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => {
        const text = e.target.value;
        setSearch(text);
        handleSearch(text, selectedCategory); // live search
      }}
      className="px-3 py-2 bg-transparent focus:outline-none"
    />
    <FaSearch
      className="cursor-pointer p-2 text-blue-600 text-2xl"
      onClick={() => handleSearch(search, selectedCategory)}
    />
  </div>
</div>


      {/* RIGHT: LOGIN + CART */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setShowLogin(true);
            setLoginMessage("Login done!");
            setTimeout(() => setLoginMessage(""), 3000);
          }}
          className="bg-blue-600 px-4 py-1 rounded text-white"
        >
          Login
        </button>
        {loginMessage && <span className="text-green-600 text-sm">{loginMessage}</span>}

        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl md:text-3xl" />
          {invoice?.count > 0 && (
            <div className="absolute -top-2 -right-1 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              {invoice.count}
            </div>
          )}
        </Link>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden z-50">
          <NavLink to="/" className={isActive}>Home</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/kid">Kids</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbarp;



