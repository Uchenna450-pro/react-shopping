import React from "react";
import Nav from "../constants/Nav";
import { Link, useNavigate } from "react-router-dom";
import bg2 from '../assets/expanded.png';
import '../css/CheckOut.css';
import Footer from "../constants/Footer";

const CheckOut = () => {
    const navigate = useNavigate();
    return (
        <div className="CheckOut">
            <Nav />
            <div className="Hero" style={{ backgroundImage: `url(${bg2})` }}></div>
            <main>
                <div className="flex-header">
                    <div className="title">Home / Phones / iPhone 14 Pro Max / Shopping Cart / Billing Details</div>
                    <div className="flex-btn">
                        <Link to="/cart">
                            <div className="cart">
                                <i className="fa fa-cart-shopping"></i>
                                <span id="cart-no">0</span>
                            </div>
                        </Link>
                        <div className="sort"><i className="fa fa-bars"></i></div>
                    </div>
                </div>
                <form action={`${window.location.origin}/checkout-pay`}>
                    <div className="input-field">
                        <p className="input-label">First Name*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Last Name*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Country / Region*</p>
                        <select>
                            <option value="country">Select Country / Region</option>
                            <option value="nigeria">Nigeria</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <p className="input-label">Street Address*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">State*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Phone Number*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Post Code(Optional)</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Email Address*</p>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <p className="input-label">Other Notes(Optional)</p>
                        <textarea></textarea>
                    </div>
                </form>
                <div className="CartTotal">
                    <h2>Order Summary</h2>
                    <div className="flex-display">
                        <p className="title">Phones(3): </p>
                        <p className="value">$1950</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Total: </p>
                        <p className="value">$1950</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Shipping: </p>
                        <p className="value">$50</p>
                    </div>
                    <div className="line"></div>
                    <button className="large-btn" onClick={() => navigate("/checkout-pay")}>Place Order</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CheckOut;