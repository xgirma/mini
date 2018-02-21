import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import './Menu.css';

const Menu = () => (<HashRouter>
	<div className="Menu">
		<span className="sub-menu"> <NavLink to="/" activeStyle={{ color:'#F8F8FF' }} exact={true}>HOME</NavLink> </span>
		<span className="sub-menu"> <NavLink to="/library" activeStyle={{ color:'#F8F8FF' }} exact={true}>LIBRARY</NavLink> </span>
		<span className="sub-menu"> <NavLink to="/about" activeStyle={{ color:'#F8F8FF' }} exact={true}>ABOUT</NavLink> </span>
	</div>
</HashRouter>);

export default Menu;
