import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

type NProps = {
    props: {
        name: string,
        setName: (name: string) => void
    },
};

export const Navbar = ({props}: NProps): JSX.Element => {
    const logout = async () => {
        const URL = "http://localhost:9000/api/logout";
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
        });
        props.setName("");
    };

    let menu;
    if (props.name === "") {
        menu = (
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        );
    } else {
        menu = (
            <ul>
                <li>
                    <Link to="/login" onClick={logout}>Logout</Link>
                </li>
            </ul>
        );
    }

    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <Link className="navbar__link" to="/">Main</Link>
                <aside>{menu}</aside>
                {/* <Link className="navbar__link" to="/register">Register</Link>
                <Link className="navbar__link" to="/login">Login</Link> */}
            </ul>
        </nav>
    );
};




