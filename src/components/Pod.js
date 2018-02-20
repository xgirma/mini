import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { podType } from '../type';
import { podDefault } from '../data/default';
import './Pod.css';

class Pod extends Component {
	static propTypes = {
	  pod: podType,
	  onPodSelection: PropTypes.func.isRequired,
	  onAutoPlay: PropTypes.func.isRequired,
	};

	static defaultProps = {
	  pod: podDefault,
	};

	displayName = 'Pod';

	handleClick = () => {
	  const { pod, onPodSelection, onAutoPlay } = this.props;
	  onPodSelection(pod._id);
	  onAutoPlay();
	};

	render() {
	  const { pod, sortByDate } = this.props;
	  const published = moment(pod.published).format('MMM DD YY');

	  return (
  <div className="pod">
    <div
      role="link"
      tabIndex="0"
      onClick={this.handleClick}
      id="pod_pod"
    >
      <div className="date_pod">
        <b>{sortByDate ? published : pod.likes}</b>
      </div>
      <div className="episode_title_pod">
        {pod.displayText}
      </div>
    </div>
  </div>
	  );
	}
}

export default Pod;
