import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Menu';
	
	state = {};
	
	render() {
		return (
			<div className="menu">
				<div className="menu-likes">{'Likes '} </div>
				<div className="menu-playlist"> {'Playlist '} </div>
				<div className="menu-contact-us"> {'Contact Us'}</div>
			</div>
		)
	}
}

export default Menu;
