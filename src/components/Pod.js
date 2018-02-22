import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {podType} from '../type';
import {podDefault} from '../data/default';
import './Pod.css';

class Pod extends Component {
	static propTypes = {
		pod: podType,
		onPodSelection: PropTypes.func.isRequired,
		onAutoPlay: PropTypes.func.isRequired,
		sortByDate: PropTypes.bool.isRequired,
	};
	
	static defaultProps = {
		pod: podDefault,
	};
	
	displayName = 'Pod';
	
	handleClick = () => {
		const {pod, onPodSelection, onAutoPlay} = this.props;
		onPodSelection(pod._id);
		onAutoPlay();
	};
	
	render() {
		const {pod, sortByDate} = this.props;
		const published = moment(pod.published).format('MMM DD YY');
		
		return (
			
			<div
				role="link"
				onClick={this.handleClick}
				className="container-pod"
			>
				<div className="item-date">
					<b>{sortByDate ? published : pod.likes}</b>
				</div>
				<div className="item-ep-title">
					{pod.displayText}
				</div>
			</div>
		);
	}
}

export default Pod;
