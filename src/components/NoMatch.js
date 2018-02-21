import React, {Component} from 'react';
import logo from './logo.svg'
import './NoMatch.css';

class NoMatch extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'NoMatch';
	
	state = {};
	
	render() {
		return (
			<div className="NoMatch">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>{"Page Not Found"}</h1>
			</div>
		)
	}
}

export default NoMatch;