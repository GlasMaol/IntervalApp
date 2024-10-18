import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav/nav.css';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div>
            <img
                className="navicon"
                src="../src/assets/navicon.svg"
                alt="nav icon"
                onClick={toggleNav}
            />

            {isNavOpen && (
                <div className="fullscreen-nav">
                    <img
                        className="navicon"
                        src="../src/assets/navicon.svg"
                        alt="close menu"
                        onClick={toggleNav}
                    />
                    <ul>
                        <li><Link to="/analog" onClick={toggleNav}>Analog Timer</Link></li>
                        <li><Link to="/digital" onClick={toggleNav}>Digital Timer</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Nav
