import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import './Header.css';

const Header = () => (<HashRouter>
	<ul className="container-header">
		
		<li className="item-home">
			<NavLink
				to="/"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>Home
			</NavLink>
		</li>
		
		<li className="item-library">
			<NavLink
				to="/library"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>Library
			</NavLink>
		</li>
		
		<li className="item-about">
			<NavLink
				to="/about"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>About
			</NavLink>
		</li>
	
	</ul>
</HashRouter>);

export default Header;