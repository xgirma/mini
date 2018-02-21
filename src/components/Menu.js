import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import './Menu.css';

const Menu = () => (<HashRouter>
	<div>
		<div className="menu">
			<span className="sub-menu"> <NavLink to="/">Home</NavLink> </span>
			<span className="sub-menu"> <NavLink to="/library">LIBRARY</NavLink> </span>
			<span className="sub-menu"> <NavLink to="/about">ABOUT</NavLink> </span>
		</div>
	</div>

</HashRouter>);

export default Menu;
