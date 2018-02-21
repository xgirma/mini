import React, { Component } from 'react';
import moment from 'moment';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { playlistType } from '../type';
import { playlistDefault } from '../data/default';
import { submitLike } from '../api/api';

import './Footer.css';

class Footer extends Component {
	static propTypes = {
	  playlist: playlistType,
	};

	static defaultProps = {
	  playlist: playlistDefault,
	};

	displayName = 'Footer';

	state = {
	  like: 0,
	};

	handleLike = (event) => {
	  event.preventDefault();
	  const { playlist } = this.props;
	  const playingNow = playlist[0];
	  const { _id } = playingNow;
	  try {
	    submitLike(_id)
	      .then(() => {
	      	this.setState({
			      like: this.state.like + 1,
		      });
	      });
	  } catch (err) {
	    throw Error(err);
	  }
	};

	render() {
	  const { playlist } = this.props;
	  const playingNow = playlist[0];
	  const { published } = playingNow;
	  const { like } = this.state;

	  return (
  <div className="footer">
    <div className="all-footer">
      <div
        role="link"
        onClick={this.handleLike}
        id="like"
      >
        <MdThumbUp />
      </div>
      <div id="facebook">
        <FaFacebookSquare />
      </div>
      <div id="twitter">
        <TiSocialTwitter />
      </div>
    </div>
    <div className="now-playing-footer">
      <p>
        <b>NOW PLAYING: {playingNow.owner_name} </b>
        <br />{playingNow.title}
        <br />{playingNow.displayText}
        <br />{playingNow.description}
        <br />{playingNow.link}
        <br />Published: {moment(published, 'YYYYMMDD').fromNow()}
        <br /><b>Likes: { like + playingNow.likes }</b>
      </p>
    </div>
  </div>
	  );
	}
}

export default Footer;
