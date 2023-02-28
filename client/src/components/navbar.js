import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { link } from "react-router-dom";
import './navbar.css';
import { Button } from './Button';


function navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        ARSS Real Estate's <i class="fa-thin fa-house"></i>
                    </link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </link>
                        </li>
                        <li className='nav-item'>
                            <link to='/listings' className='nav-links' onClick={closeMobileMenu}>
                                Listings
                            </link>
                        </li>
                        <li className='nav-item'>
                            <link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </link>
                        </li>
                        <li className='nav-item'>
                            <link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </link>
                        </li>
                    </ul>
                    {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default navbar
