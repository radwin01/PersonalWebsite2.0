import React from 'react';
import '../../styling/scss/Navbar.scss';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="nav">
            <div className='links'>
                <Link className="link" to="/">about me</Link>
                <Link className="link" to="/experience">experience</Link>
                <Link className="link" to="/projects">projects</Link>
                <Link className="link" id="disable" to="/miniblog">miniblog</Link>
            </div>

            <div className="endnote">
                <p> Copyright © 2022 Yara Radwan<br/>(last updated: Aug. 2023) </p>
            </div>
        </div>
    )
};
