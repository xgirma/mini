import React, { Component } from 'react';
import { getRecentTen, getTenLiked } from '../api/api';
import { Footer, Player, TopTen, Menu } from './index';
import { playlistDefault } from '../data/default';
import './Application.css';

class Application extends Component {
	displayName = 'Application';

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
	
	};

	render() {
	  const {
	    playlist, isLoading, autoPlay, sortByDate,
	  } = this.state;

	  if (isLoading) {
	    return <p>Loading ... </p>;
	  }

	  return (
  <div className="app">
    <Player
      playlist={playlist}
      autoPlay={autoPlay}
      onPodSelection={this.sortBySelectedPod}
      onAutoPlay={this.handleAutoPlay}
    />
    <TopTen
      playlist={playlist}
      onPodSelection={this.sortBySelectedPod}
      onAutoPlay={this.handleAutoPlay}
    />
    <Footer playlist={playlist} sort={sortByDate}/>
	  <Menu onSort={this.handleSort} />
  </div>
	  );
	}
}

export default Application;
