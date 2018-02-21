import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends Component {
	static propTypes = {
		onSort: PropTypes.func.isRequired,
		sortByDate: PropTypes.bool.isRequired,
	};
	
	static defaultProps = {};
	
	displayName = 'Menu';
	
	state = {};
	
	render() {
		
		return (
			<p>
				<span className="menu playlist">
					PLAYLIST
				</span>
				<span className="menu contact-us">
					CONTACT US
				</span>
			</p>
		);
	}
}

export default Menu;
