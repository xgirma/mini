import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import MdSubdirectoryArrowLeft from 'react-icons/lib/md/subdirectory-arrow-left';
import MdSubdirectoryArrowRight from 'react-icons/lib/md/subdirectory-arrow-right';
import { playlistDefault } from '../data/default';
import { playlistType } from '../type';
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
	  const { playlist, onPodSelection, onAutoPlay } = this.props;
	  onPodSelection(playlist[9]._id);
	  onAutoPlay(true);
	};

	handleForward = () => {
	  const { playlist, onPodSelection, onAutoPlay } = this.props;
	  onPodSelection(playlist[1]._id);
	  onAutoPlay(true);
	};

	render() {
	  const { playlist, autoPlay } = this.props;
	  const nowPlaying = playlist[0];
	  const episodeTitle = nowPlaying.displayText;

	  return (
  <div className="player">
    <div>
      <div className="media-player">
        <div className="navigation">
          <div
            onClick={this.handleBack}
            role="link"
            tabIndex="0"
          >
            <MdSubdirectoryArrowLeft />
          </div>
        </div>
        <ReactPlayer
          url={this.props.playlist[0].url}
          playing={autoPlay}
          controls
        />
        <div className="navigation">
          <div
            role="link"
            onClick={this.handleForward}
            tabIndex="0"
          >
            <MdSubdirectoryArrowRight />
          </div>
        </div>
      </div>
      <div className="social-player">
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
  </div>
	  );
	}
}

export default Player;
