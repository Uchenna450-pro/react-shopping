import React, { useState, useEffect } from "react";
import Nav from "../constants/Nav";
import bg2 from '../assets/expanded.png';
import "../css/ProductExpanded.css";
import { Link, useNavigate } from "react-router-dom";
import product from "../assets/product_a.png";
import TableRow from "../components/TableRow";
import Footer from "../constants/Footer";

const ProductExpanded = () => {
    const navigate = useNavigate();
    const [sampleData, setSampleData] = useState([
        {
            id: 1,
            productUrl: product,
            name: "iPhone 14 PRO Max",
            price: 700,
            quantity: 1,
            total: 700,
        }
    ]);
    const [overallTotal, setOverallTotal] = useState(0);

    useEffect(() => {
        const newOverallTotal = sampleData.reduce((acc, item) => acc + item.total, 0);
        setOverallTotal(newOverallTotal);
    }, [sampleData]);
    return (
        <div className="ProductExpanded">
            <Nav />
            <div className="Hero" style={{ backgroundImage: `url(${bg2})` }}></div>
            <main>
                <div className="flex-header">
                    <div className="title">Home / Phones / iPhone 14 Pro Max / Shopping Cart</div>
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
                <div className="trap-table">
                    <div className="table">
                        <div className="TableHeader">
                            <span className="item">Product</span>
                            <span className="item">Name</span>
                            <span className="item">Price</span>
                            <span className="item">Quantity</span>
                            <span className="item">Total</span>
                            <span className="item">Handle</span>
                        </div>
                        <div className="line"></div>
                        <br />
                        {
                            sampleData.map(item => (
                                <TableRow
                                    key={item.id}
                                    id={item.id}
                                    img={item.productUrl}
                                    text={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    total={item.total}
                                    setSampleData={setSampleData}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="CartTotal">
                    <h2>Cart Total</h2>
                    <div className="flex-display">
                        <p className="title">Sub-Total: </p>
                        <p className="value">${overallTotal}</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Shipping: </p>
                        <p className="value">${overallTotal / 10}</p>
                    </div>
                    <div className="line"></div>
                    <div className="flex-display">
                        <p className="title">Total: </p>
                        <p className="value">${overallTotal + (overallTotal / 10)}</p>
                    </div>
                    <div className="line"></div>
                    <button className="large-btn" onClick={() => navigate("/checkout")}>Checkout Products</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductExpanded;