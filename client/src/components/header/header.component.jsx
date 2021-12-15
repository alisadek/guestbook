import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<div className='logo'>Logo</div>
			</Link>
			<div className='options'>
				<Link className='option' to='/signin'>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default Header;
