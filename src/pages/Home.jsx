import React from "react";
import Nav from "../constants/Nav";
import Footer from "../constants/Footer";
import '../css/Home.css';
import HeroImg from '../assets/product_list.png';
import ProductItem from "../components/ProductItem";
import ProductItems from "../constants/productdata";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="HomePage">
            <Nav />
            <div className="Hero">
                <h1>Work, Relax, Explore and Thrive Better.</h1>
                <p>Discover a balanced life with tools and tips for productivity, leisure, adventure, and personal growth.</p>
                <div className="search-flex">
                    <div className="search-field">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search Products" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="HeroImg">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
            <main>
                <h2>Let's Cater For Your Gadgets</h2>
                <h1>OUR COLLECTIONS</h1>
                <div className="grid">
                    {
                        ProductItems.map(item =>
                            <ProductItem
                                key={item.id}
                                img={item.url}
                                number={item.number}
                                description={item.description}
                                title={item.title}
                            />
                        )
                    }
                </div>
                <button className="large-btn" onClick={() => navigate("/products")}>View More Gadgets</button>
            </main>
            <Footer />
        </div>
    );
};

export default Home;