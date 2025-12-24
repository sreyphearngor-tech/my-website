import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import logo2 from '../../assets/images/logo2.jpg'
import Cart_img from '../../assets/images/Cart_img.jpg'
const Navbar = ({ setPage }) => {
  const [active, setActive] = useState("shop");

  const handleClick = (page) => {
    setActive(page);
    setPage(page);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
      <img src={logo2} alt="" />
   
      </div>
      <ul className="nav-menu ">
        <li onClick={() => handleClick("home")}><Link style={{textDecoration: 'none',color:'gray'}} to='/home'>Home</Link></li>
        <li onClick={() => handleClick("shops")}><Link style={{textDecoration: 'none',color:'gray'}} to='/shop'>Shop</Link></li>
        <li onClick={() => handleClick("mens")}><Link style={{textDecoration: 'none',color:'gray'}} to='/Men'>Men</Link></li>
        <li onClick={() => handleClick("womens")}><Link style={{textDecoration: 'none',color:'gray'}} to='/Women'>Women</Link></li>
        <li onClick={() => handleClick("kids")}><Link style={{textDecoration: 'none',color:'gray'}} to='/Kids'>Kid</Link></li>

      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'> <img src={Cart_img} alt="" /></Link>
        <div className="nav-cart-count">0  
        </div>
      </div>
          <div className="navbar-men">
          <div className="input-group " style={{ maxWidth: "670px",top:"5%",marginLeft:"100px"}}>
  <input type="text"className="form-control"placeholder="Search products..."
  />
  <button className="btn btn-primary">
    Search
  </button>
</div>

      </div>
    </div>
    
  );
};

export default Navbar;