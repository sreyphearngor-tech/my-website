import React from 'react'

const NavbarMenu = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>SHOPPER</h2>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kid">Kid</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  )
}

export default NavbarMenu
  