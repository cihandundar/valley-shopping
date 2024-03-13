import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaShoppingCart, FaHome } from "react-icons/fa";
import { MdOutlineFavorite, MdProductionQuantityLimits } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="nav">
      <div className="nav__container" ref={navRef}>
        <div className="nav__logo">
          <Link to="/">
            <h1>WARCRAFT</h1>
          </Link>
        </div>
        <ul className="nav__list">
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/">
              Home <FaHome />
            </NavLink>
          </li>
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/product">
              Product <MdProductionQuantityLimits />
            </NavLink>
          </li>
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/favorites">
              Favorites <MdOutlineFavorite />
            </NavLink>
          </li>
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/cart">
              Cart <FaShoppingCart />
              {cart.cartItems.length > 0 && (
                <span className="cart-item-count">{cart.cartItems.length}</span>
              )}
            </NavLink>
          </li>
        </ul>

        <ul className="nav__list">
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/signin">
              Sign In <BsPeopleFill />
            </NavLink>
          </li>
          <li onClick={showNavbar} className="nav__list__link">
            <NavLink to="/signup">
              Sign Up <BsPeopleFill />
            </NavLink>
          </li>
          <li onClick={showNavbar} className="nav__list__link">
            <button className="logout">
              Logout
              <IoLogOut />
            </button>
          </li>
        </ul>

        <button className="navBtn closeBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="navBtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
