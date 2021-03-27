import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import { AiFillShopping } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <AiFillShopping className='navbar-icon' />
                    {/* SHOESSHOP */}
                </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Home
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links">
                                Products
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links">
                                Services
                    </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Sign Up
                            </Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            
            </nav>
        </>
    )
}

export default Navbar
