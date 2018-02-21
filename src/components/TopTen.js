import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {playlistType} from '../type';
import {playlistDefault} from '../data/default';
import Pod from './Pod';
import './TopTen.css';

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
			<div >
				<div>
					{sortByDate ?
						(<div className="sort-link">
							<div>RECENT PODCASTS</div>
							<div
								className="sort-inactive"
								role="link"
								onClick={onSort}
							> {'<<'} TOP LIKED PODCAST</div>
						</div>):
						(<div className="sort-link">
							<div> TOP LIKED PODCAST</div>
							<div
								className="sort-inactive"
								role="link"
								onClick={onSort}
							> {'<<'} RECENT PODCASTS</div>
						</div>)}
				</div>
				<div className="topTen">
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
