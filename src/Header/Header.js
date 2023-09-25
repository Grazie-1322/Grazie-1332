import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import GrazieLogo from "../Assets/Grazie1322Logo.png";
import { FaHome, FaInfoCircle, FaShoppingCart, FaEnvelope } from "react-icons/fa";

const Headermain = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <nav className={`header ${isActive ? "active" : ""}`}>
            <div className="menu-toggle" onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <img src={GrazieLogo} alt="Grazie Logo" className="logo" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <FaHome className="nav-icon" /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">
                            <FaInfoCircle className="nav-icon" /> About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">
                            <FaShoppingCart className="nav-icon" /> Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">
                            <FaEnvelope className="nav-icon" /> Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Headermain;
