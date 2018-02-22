import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import {playlistDefault} from '../data/default';
import {playlistType} from '../type';
import './Player.css';

class Player extends Component {
	static propTypes = {
		playlist: playlistType,
		onPodSelection: PropTypes.func.isRequired,
		onAutoPlay: PropTypes.func.isRequired,
		autoPlay: PropTypes.bool.isRequired,
	};
	
	static defaultProps = {
		playlist: playlistDefault,
	};
	
	displayName = 'Player';
	
	state = {};
	
	handleBack = () => {
		const {playlist, onPodSelection, onAutoPlay} = this.props;
		onPodSelection(playlist[9]._id);
		onAutoPlay(true);
	};
	
	handleForward = () => {
		const {playlist, onPodSelection, onAutoPlay} = this.props;
		onPodSelection(playlist[1]._id);
		onAutoPlay(true);
	};
	
	render() {
		const {playlist, autoPlay} = this.props;
		const nowPlaying = playlist[0];
		const episodeTitle = nowPlaying.displayText;
		
		return (
			<div className="container-player">
				<div className="item-player">
					<ReactPlayer
						url={this.props.playlist[0].url}
						playing={autoPlay}
						controls
					/>
				</div>
				<div className="item-title">
					<p>
						<b>
							{episodeTitle.length > 60 ?
								(`${episodeTitle.substring(0, 60)}...`) :
								(episodeTitle.substring(0, 60))
							}
						</b>
					</p>
				</div>
			</div>
		);
	}
}

export default Player;
