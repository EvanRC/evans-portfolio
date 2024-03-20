import React from "react"; // React library import for using JSX
import { NavLink } from 'react-router-dom';
// Navigation functional component definition 
const Navigation = () => {
    // Returns the navigation bar JSX 
    return (
        // Defines the navigation area 
        <nav className="nav"> 
            <h1 id="title">Evan's Portfolio</h1>
            <ul id="head-link"> 
                <li><NavLink to="/">About Me</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;