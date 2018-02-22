import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import './Header.css';

const Header = () => (<HashRouter>
	<div className="container-header">
		
		<span className="item-home">
			<NavLink
				to="/"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>Home
			</NavLink>
		</span>
		
		<span className="item-library">
			<NavLink
				to="/library"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>Library
			</NavLink>
		</span>
		
		<span className="item-about">
			<NavLink
				to="/about"
				activeStyle={{ color:'#F8F8FF' }}
				exact={true}
			>About
			</NavLink>
		</span>
	
	</div>
</HashRouter>);

export default Header;