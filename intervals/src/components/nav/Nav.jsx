import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav/nav.css';
import { motion } from 'framer-motion';

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
                        <motion.li
                            whileHover={{
                                scale: 1.2,
                            }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut'
                            }}
                        ><Link to="/analog" onClick={toggleNav}>Analog Timer</Link></motion.li>
                        <motion.li
                            whileHover={{
                                scale: 1.2,
                            }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut'
                            }}
                        ><Link to="/digital" onClick={toggleNav}>Digital Timer</Link></motion.li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Nav
