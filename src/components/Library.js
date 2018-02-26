import React, {Component} from 'react';
import { getChannels } from "../api/api";
import { Channel } from './index';
import { channelsDefault } from '../data/default'
import PropTypes from 'prop-types';
import './Library.css';

class Library extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Library';
	
	state = {
		channels: channelsDefault,
		isLoading: false,
		error: null,
	};
	
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		this.fetchChannels();
	}
	
	async fetchChannels() {
		try {
			const response = await getChannels();
			this.setState({
				channels: response,
				isLoading: false,
			});
		} catch (err) {
			this.setState({
				error: err,
				isLoading: false,
			});
		}
	}
	
	render() {
		const channels = this.state.channels;
		console.log(channels);
		return (
			<div className="container-library">
				<div className="item-channels">
					{
						channels.map(channel => (
							<Channel
								key={channel._id}
								channel={channel}
							/>
						))
					}
				</div>
			</div>
		)
	}
}

export default Library;