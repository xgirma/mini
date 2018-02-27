import React, {Component} from 'react';
import Loading from './Loading';
import {getChannel, getRecentTen, getTenLiked} from '../api/api';
import {channelDefault, playlistDefault} from '../data/default';
import { NowPlaying, Player, Playlist } from './index';
import PropTypes from 'prop-types';
import './Channel.css';

class Channel extends Component {
	constructor(props){
		super(props);
		this.state = {
			channel : props.match.params.channel,
			playlist: playlistDefault,
			isLoading: false,
			error: null,
			autoPlay: false,
			sortByDate: true,
		}
	}
	
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Channel';
	
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		this.fetchRecentTen();
	}
	
	async fetchRecentTen() {
		try {
			const response = await getChannel(this.state.channel, 'recent');
			this.setState({
				playlist: response,
				isLoading: false,
			});
		} catch (err) {
			this.setState({
				error: err,
				isLoading: false,
			});
		}
	}
	
	async fetchTopTenLiked() {
		try {
			const response = await getChannel(this.state.channel, 'liked');
			this.setState({
				playlist: response,
				isLoading: false,
			});
		} catch (err) {
			this.setState({
				error: err,
				isLoading: false,
			});
		}
	}
	
	handleAutoPlay = (value) => {
		this.setState({
			autoPlay: value,
		});
	};
	
	sortBySelectedPod = (id) => {
		const { playlist } = this.state;
		const index = playlist.findIndex(pod => pod._id === id);
		const newPlaylist = [...(playlist.slice(index)), ...(playlist.slice(0, index))];
		this.setState({
			playlist: newPlaylist,
		});
	};
	
	handleSort = () => {
		this.setState({
			sortByDate: !this.state.sortByDate,
		}, () => {
			if (this.state.sortByDate) {
				this.fetchRecentTen();
			} else {
				this.fetchTopTenLiked();
			}
		});
	};
	
	render() {
		const channel = this.state.channel;
		console.log('channel: ', channel);
		console.log('playlist: ', this.state.playlist);
		
		const {
			playlist, isLoading, autoPlay, sortByDate,
		} = this.state;
		
		if (isLoading) {
			return <Loading/>;
		}
		
		return (
			<div className="container-home">
				<div className="item-player">
					<Player
						playlist={playlist}
						autoPlay={autoPlay}
						onPodSelection={this.sortBySelectedPod}
						onAutoPlay={this.handleAutoPlay}
					/>
				</div>
				<div className="item-playlist">
					<Playlist
						playlist={playlist}
						sortByDate={sortByDate}
						onPodSelection={this.sortBySelectedPod}
						onAutoPlay={this.handleAutoPlay}
						onSort={this.handleSort}
					/>
				</div>
				<div className="item-now-playing">
					<NowPlaying playlist={playlist} sortByDate={sortByDate} />
				</div>
			</div>
		)
	}
}

export default Channel;
