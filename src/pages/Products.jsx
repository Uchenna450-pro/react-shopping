import React, { useState } from "react";
import Nav from "../constants/Nav";
import Footer from "../constants/Footer";
import '../css/Products.css';
import bg1 from '../assets/bg-phone.png';
import bg2 from '../assets/bg-phone-mobile.png';
import { Link } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";

const Products = () => {
    const getQueryParams = (query) => {
        return new URLSearchParams(window.location.search).get(query);
    };
    const productType = getQueryParams("product_type") || "phones"; // set the default type to phones
    const [width, setWidth] = useState(document.body.clientWidth);
    setWidth(document.body.clientWidth);
    const product = () => {
        switch (productType) {
            case "phones": break; //define later     
            default: break;
        }
    };
    product();
    return (
        <div className="ProductsPage">
            <Nav />
            <div className="Hero" style={{ backgroundImage: `url(${width > 450 ? bg1 : bg2})` }}>
                <h1>PHONES</h1>
                <div className="search-flex">
                    <div className="search-field">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search Phones" />
                    </div>
                    <button>Search</button>
                </div>
            </div>
            <main>
                <h3>Home / {`${productType.substring(0, 1).toUpperCase()}${productType.substring(1, productType.length)}`}</h3>
                <div className="flex-header">
                    <h2>CATEGORIES</h2>
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
                <div className="category-filter">
                    <button>Apple</button>
                    <button>Samsung</button>
                    <button>Xiaomi</button>
                    <button>Tecno</button>
                    <button>Itel</button>
                    <button>OnePlus</button>
                    <button>Google (Pixel)</button>
                    <button>Sony</button>
                    <button>LG</button>
                    <button>Lenovo</button>
                    <button>Hauwei</button>
                </div>
                <div className="result-show">
                    Showing 1-5 of 150 results
                </div>
                <div className="ProductGrid">
                    <ProductComponent
                        img="productitems/phone1.png"
                        price={700}
                        rating={4.5}
                        title={"iPHONE 14 PRO MAX"}
                    />
                    <ProductComponent
                        img="productitems/phone2.png"
                        price={900}
                        rating={4}
                        title={"iPHONE 15 PRO MAX"}
                    />
                    <ProductComponent
                        img="productitems/phone3.png"
                        price={760}
                        rating={3.5}
                        title={"iPHONE 14 PRO"}
                    />
                    <ProductComponent
                        img="productitems/phone4.png"
                        price={410}
                        rating={5}
                        title={"iPHONE XR"}
                    />
                    <ProductComponent
                        img="productitems/phone5.png"
                        price={500}
                        rating={4}
                        title={"iPHONE XX MAX"}
                    />
                    <ProductComponent
                        img="productitems/phone6.png"
                        price={650}
                        rating={4.5}
                        title={"iPHONE 13 PRO MAX"}
                    />
                </div>
                <div className="pagination">
                    <button className="pagi-item"><i className="fas fa-angle-left"></i></button>
                    <button className="pagi-item active">1</button>
                    <button className="pagi-item">2</button>
                    <button className="pagi-item">3</button>
                    <button className="pagi-item">4</button>
                    <button className="pagi-item">5</button>
                    <span>........</span>
                    <button className="pagi-item">12</button>
                    <button className="pagi-item"><i className="fas fa-angle-right"></i></button>
                </div>
                <Link to="/expanded"><button className="large-btn">View More Gadgets</button></Link>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
