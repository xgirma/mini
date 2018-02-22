import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {playlistType} from '../type';
import {playlistDefault} from '../data/default';
import Pod from './Pod';
import './Playlist.css';

class TopTen extends Component {
	static propTypes = {
		playlist: playlistType,
		onPodSelection: PropTypes.func.isRequired,
		onAutoPlay: PropTypes.func.isRequired,
		sortByDate: PropTypes.bool.isRequired,
		onSort: PropTypes.func.isRequired,
	};
	
	static defaultProps = {
		playlist: playlistDefault,
	};
	
	displayName = 'TopTen';
	
	render() {
		const {
			playlist, onPodSelection, onAutoPlay, sortByDate, onSort,
		} = this.props;
		
		return (
			<div className="container-playlist">
				<div className="item-sort">
					{sortByDate ?
						(<div className="sort-link">
							<div>RECENT</div>
							<div
								className="sort-inactive"
								role="link"
								onClick={onSort}
							> LIKED</div>
						</div>):
						(<div className="sort-link">
							<div> LIKED</div>
							<div
								className="sort-inactive"
								role="link"
								onClick={onSort}
							> RECENT</div>
						</div>)}
				</div>
				<div className="item-playlist">
					{
						playlist.map(pod => (
							<Pod
								key={pod._id}
								pod={pod}
								sortByDate={sortByDate}
								onPodSelection={() => onPodSelection(pod._id)}
								onAutoPlay={() => onAutoPlay(true)}
							/>
						))
					}
				</div>
			</div>
		);
	}
}

export default TopTen;
