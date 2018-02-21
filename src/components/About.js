import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.css';

class About extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'About';
	
	state = {};
	
	render() {
		return (
			<div className="About">
				{"About: coming soon ..."}
			</div>
		)
	}
}

export default About;