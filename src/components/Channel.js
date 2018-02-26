import React, {Component} from 'react';
import { channelDefault } from '../data/default';
import PropTypes from 'prop-types';
import './Channel.css';

class Channel extends Component {
	constructor(props){
		super(props);
		this.state = {
			channel : props.match.params.channel
		}
	}
	
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Channel';
	
	render() {
		const channel = this.state.channel;
		console.log('channel: ', channel);
		return (
			<div className="container-channel">
				<div className="item-channel">
					<h3>{channel}</h3>
				</div>
			</div>
		)
	}
}

export default Channel;
