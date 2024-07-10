import React, { useState } from "react";
import logo from '../assets/logo.png';
import '../css/Nav.css'
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const useActive = path => useLocation().pathname === path ? 'active' : '';
    const [barSlide, setBarSlide] = useState(false);
    return (
        <nav className="Nav">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <ul className="NavLinks">
                <Link to="/" className={useActive('/')}>Home</Link>
                <Link to="/products" className={useActive('/products')}>Products</Link>
                <Link to="/contact" className={useActive('/contact')}>Contact Us</Link>
            </ul>
            <div className="BuyBtn">
                <Link to="/cart">Buy Now</Link>
            </div>
            <div className="Bar" onClick={() => setBarSlide(prev => !prev)}><i className="fas fa-bars"></i></div>
            <div className={`AbsoluteBar ${barSlide ? 'AbsoluteBarShown' : ''}`}>
                <Link to="/" className={useActive('/')}>Home</Link>
                <Link to="/products" className={useActive('/products')}>Products</Link>
                <Link to="/contact" className={useActive('/contact')}>Contact Us</Link>
                <Link to="/cart" className={useActive('/cart')}>Buy Now</Link>
            </div>
        </nav>
    );
};

export default Nav;