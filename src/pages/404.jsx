import React from "react";
import Nav from "../constants/Nav";
import Footer from "../constants/Footer";
import '../css/Home.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="HomePage">
            <Nav />
            <div className="Hero">
                <h1>404 - Page Not Found.</h1>
                <p>For now, you can go back to the <Link to="/">Home Page</Link></p>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;