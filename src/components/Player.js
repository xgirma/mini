import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right'
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left'
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
	
	handlePrevious = () => {
		const {playlist, onPodSelection, onAutoPlay} = this.props;
		onPodSelection(playlist[9]._id);
		onAutoPlay(true);
	};
	
	handleNext = () => {
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
						width={540}
						hight={260}
					/>
				</div>
				<div className="item-title">
					<div
						className="item-previous"
						role="link"
						onClick={this.handlePrevious}
					>
						<FaArrowCircleLeft />
					</div>
					<div className="item-playing">
						<b>
							{episodeTitle.length > 60 ?
								(`${episodeTitle.substring(0, 60)}...`) :
								(episodeTitle.substring(0, 60))
							}
						</b>
					</div>
					<div
						role="link"
						className="item-next"
						onClick={this.handleNext}
					>
						<FaArrowCircleRight />
					</div>
				</div>
			</div>
		);
	}
}

export default Player;
