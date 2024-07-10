import React from "react";
import logo from '../assets/logo.png';
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="Footer">
                <div className="item">
                    <img src={logo} alt="Logo" />
                    <p className="Logo">
                        <span className="wrap">
                            <span className="big">E</span><span>VERYTHING</span>
                        </span>&nbsp;
                        <span className="wrap">
                            <span className="big">G</span><span>ADGETS</span>
                        </span>
                    </p>
                    <div className="icons">
                        <i className="fas fa-envelope"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                <div className="item">
                    <h3>Contact Us</h3>
                    <p className="c-23"><i className="fas fa-location-dot"></i>5, Awolowo Road, Ikoyi, Lagos, Nigeria.</p>
                    <p><i className="fas fa-phone"></i>+234 905 612 5571 <br /> <span>+234 912 759 0356</span></p>
                </div>
                <div className="item">
                    <h3>Company</h3>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Join Us</Link>
                </div>
            </div>
            <hr />
            <p>&copy; 2024 Everything Gadgets. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;