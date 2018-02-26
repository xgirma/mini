import React, {Component} from 'react';
import { channelDefault } from '../data/default';
import PropTypes from 'prop-types';
import './Channel.css';

class Channel extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Channel';
	
	state = {};
	
	render() {
		const channel = this.props.channel;
		
		return (
			<div className="container-channel">
				<div className="item-channel">
					{channel.title}
				</div>
			</div>
		)
	}
}

export default Channel;
