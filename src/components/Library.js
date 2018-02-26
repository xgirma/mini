import React, {Component} from 'react';
import { getChannels } from "../api/api";
import { Collection } from './index';
import { channelsDefault } from '../data/default'
import PropTypes from 'prop-types';
import './Library.css';

class Library extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Library';
	
	state = {
		collections: channelsDefault,
		isLoading: false,
		error: null,
	};
	
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		this.fetchChannels();
	}
	
	async fetchChannels() {
		try {
			const response = await getChannels();
			this.setState({
				collections: response,
				isLoading: false,
			});
		} catch (err) {
			this.setState({
				error: err,
				isLoading: false,
			});
		}
	}
	
	render() {
		const collections = this.state.collections;
		
		return (
			<div className="container-library">
				<div className="item-channels">
					{
						collections.map(collection => (
							<Collection
								key={collection._id}
								collection={collection}
							/>
						))
					}
				</div>
			</div>
		)
	}
}

export default Library;