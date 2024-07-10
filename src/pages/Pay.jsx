import React from "react";
import Nav from "../constants/Nav";
import Footer from "../constants/Footer";
import { useNavigate } from "react-router-dom";
import '../css/Pay.css';

const Pay = () => {
    const navigate = useNavigate();
    return (
        <div className="CheckOutPay">
            <Nav />
            <main>
                <div className="CartTotal">
                    <h2>Transfer Details</h2>
                    <div className="flex-display">
                        <p className="title">Accoutn Name: </p>
                        <p className="value">Everything Gadgets</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Bank Name: </p>
                        <p className="value">PayStack</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Account Number: </p>
                        <p className="value">1234567890</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Amount: </p>
                        <p className="value">$2000</p>
                    </div>
                    <div className="line"></div>
                    <div className="validate-warn">
                        <i className="fas fa-triangle-exclamation"></i>
                        <span>Ensure you transfer the exact amount of money stated above!</span>
                    </div>
                    <button className="large-btn" onClick={() => navigate("/")}>Confirm Order</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Pay;