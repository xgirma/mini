import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	static propTypes = {};

	static defaultProps = {};

	displayName = 'Header';

	state = {};

	render() {
	  return (
  <div className="header">
    <h4> Home | Playlist | List </h4>
  </div>
	  );
	}
}

export default Header;
