import React, {Component} from 'react';
import {HashRouter, NavLink} from "react-router-dom";
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
					<HashRouter>
						<NavLink
							to={`/library/${channel.title}`}
							exact={true}
						>
							{channel.title}
						</NavLink>
					</HashRouter>
				</div>
			</div>
		)
	}
}

export default Channel;
