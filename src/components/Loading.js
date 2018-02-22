import React, {Component} from 'react';
import './Loading.css';

class Loading extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Loading';
	
	state = {
		text: 'Loading...'
	};
	
	// componentDidMount() {
	// 	let stopper = '...';
	// 	this.interval = window.setInterval(function() {
	// 		if(this.state.text === stopper){
	// 			this.setState(function () {
	// 				return {
	// 					text: 'Loading'
	// 				}
	// 			})
	// 		} else {
	// 			this.setState(function(previousState) {
	// 				return {
	// 					text: previousState.text + '.'
	// 				}
	// 			})
	// 		}
	// 	}.bind(this), 300)
	// }
	//
	// componentWillUnmount() {
	// 	window.clearInterval(this.interval);
	// }
	
	render() {
		return (
			<div className="Loading">
				{this.state.text}
			</div>
		)
	}
}

export default Loading;