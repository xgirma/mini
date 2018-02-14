import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Menu';
	
	state = {};
	
	render() {
		const { onSort, sortByDate } = this.props;
		
		return (
			<div className="menu">
				<div
					role="link"
					className="menu-likes"
					onClick={onSort}
				>
					{sortByDate ? 'Top 10' : '10 Recent'}
				</div>
				
				<div className="menu-playlist">
					{'Playlist '}
				</div>
				<div className="menu-contact-us">
					{'Contact Us'}
				</div>
			</div>
		)
	}
}

export default Menu;
