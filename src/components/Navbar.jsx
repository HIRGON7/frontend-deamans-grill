import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";
import logo from "../images/logo.png";
import bag from "../images/bag.png";
import defaultAvatar from "../images/default-avatar.png"; 
import { FaTimes as CloseIcon, FaBars as ReorderIcon } from "react-icons/fa";
import { getCart } from "../utils/cart";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setOpenMenu(prev => !prev);
  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const total = cart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">

      
      <div className="nav-left">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className={`nav-links ${openMenu ? "opened" : "closed"}`}>
        <button className="close-menu-icon" onClick={closeMenu}>
          <CloseIcon />
        </button>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/food" onClick={closeMenu}>Menu</Link>
        <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
        <Link to="/game" onClick={closeMenu}>Game</Link>
      </div>

     
      <div className="nav-right">


        <div
          className="profile-wrapper"
          onClick={() => setProfileOpen(prev => !prev)}
        >
          <img
            src={defaultAvatar}
            alt="profile"
            className="profile-pic"
          />

          {profileOpen && (
            <div className="profile-dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>

        <Link to="/checkout" className="bag-wrapper" onClick={closeMenu}>
          <img src={bag} className="bag-icon" alt="checkout bag" />
          {cartCount > 0 && <span className="bag-count">{cartCount}</span>}
        </Link>

        <button className="mobile-menu-icon" onClick={toggleMenu}>
          <ReorderIcon />
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
