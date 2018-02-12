import React, { Component } from 'react';
import moment from 'moment';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import './Footer.css';
import { playlistType } from '../type';
import { playlistDefault } from '../data/default';


class Footer extends Component {
	static propTypes = {
	  playlist: playlistType,
	};

	static defaultProps = {
	  playlist: playlistDefault,
	};

	displayName = 'Footer';

	state = {};

	render() {
	  const { playlist } = this.props;
	  const playingNow = playlist[0];
	  const { published } = playingNow;

	  return (
  <div className="footer">
    <div className="like-footer">
      <div>
        <MdThumbUp />
      </div>
      <div>
        <FaFacebookSquare />
      </div>
      <div>
        <TiSocialTwitter />
      </div>
    </div>
    <div className="now-playing-footer">
      <p>
        <b>Now Playing: {playingNow.owner_name} </b>
        <br />{playingNow.title}
        <br />{playingNow.displayText}
        <br />{playingNow.description}
        <br />{playingNow.link}
        <br />Published: {moment(published, 'YYYYMMDD').fromNow()}
        <br /><b>Likes: {playingNow.likes}</b>
      </p>
    </div>
  </div>
	  );
	}
}

export default Footer;
