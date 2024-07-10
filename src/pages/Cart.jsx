import React from "react";
import Nav from "../constants/Nav";
import Footer from "../constants/Footer";
import '../css/Home.css';

const Contact = () => {
    return (
        <div className="HomePage">
            <Nav />
            <div className="Hero">
                <h1>Page Coming Soon.</h1>
                <p>For now, enjoy <a href="https://hng.slack.com">HNG</a></p>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;