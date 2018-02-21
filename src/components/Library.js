import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Library.css';

class Library extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Library';
	
	state = {};
	
	render() {
		return (
			<div className="Library">
				{"Library ..."}
			</div>
		)
	}
}

export default Library;