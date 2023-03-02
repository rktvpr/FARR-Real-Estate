import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import Auth from '../../utils/auth';

const Navbar = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<>
			<Nav>
						<NavMenu>
							<NavLink to="/login" activeStyle>
								Login
							</NavLink>
							<NavLink to="/signup" activeStyle>
								Signup
							</NavLink>
							<NavLink to="/contactrealtor" activeStyle>
								Contact Realtor
							</NavLink>
							<button className="btn btn-lg btn-light m-2" onClick={logout}>
								Logout
							</button>
						</NavMenu>
					</Nav>
				</>
				);
};

				export default Navbar;
