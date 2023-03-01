import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/signup' activeStyle>
                        Signup
                    </NavLink>
                    <NavLink to='/contactrealtor' activeStyle>
                        Contact Realtor
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;