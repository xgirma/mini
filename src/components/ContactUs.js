import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ContactUs.css';

class ContactUs extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'ContactUs';
	
	state = {};
	
	render() {
		return (
			<div className="ContactUs">
				{"Contact Us ..."}
			</div>
		)
	}
}

export default ContactUs;