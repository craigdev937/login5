import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <Link className="navbar__link" to="/register">Register</Link>
                <Link className="navbar__link" to="/login">Login</Link>
                <Link className="navbar__link" to="/main">Main</Link>
            </ul>
        </nav>
    );
};




