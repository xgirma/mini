import React, {Component} from 'react';
import Loading from './Loading';
import { getRecentTen, getTenLiked } from '../api/api';
import { Footer, Player, TopTen, Menu } from './index';
import { playlistDefault } from '../data/default';
import './Home.css';

class Home extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Home';
	
	state = {
		playlist: playlistDefault,
		isLoading: false,
		error: null,
		autoPlay: false,
		sortByDate: true,
	};
	
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		this.fetchRecentTen();
	}
	
	async fetchRecentTen() {
		try {
			const response = await getRecentTen();
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
			const response = await getTenLiked();
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
		const {
			playlist, isLoading, autoPlay, sortByDate,
		} = this.state;
		
		if (isLoading) {
			return <Loading/>;
		}
		
		return (
			<div className="container-home">
				<Player
					playlist={playlist}
					autoPlay={autoPlay}
					onPodSelection={this.sortBySelectedPod}
					onAutoPlay={this.handleAutoPlay}
				/>
				<TopTen
					playlist={playlist}
					sortByDate={sortByDate}
					onPodSelection={this.sortBySelectedPod}
					onAutoPlay={this.handleAutoPlay}
					onSort={this.handleSort}
				/>
				<Footer playlist={playlist} sortByDate={sortByDate} />
			</div>
		);
	}
}

export default Home;