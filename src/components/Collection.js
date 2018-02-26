import React, {Component} from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import { channelDefault } from '../data/default';
import PropTypes from 'prop-types';
import './Collection.css';

class Collection extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Collection';
	
	state = {};
	
	render() {
		const collection = this.props.collection;
		const url = `/library/${collection.title}`;
		
		return (
			<div className="container-collection">
				<div className="item-collection">
					<HashRouter>
						<NavLink
							to={url}
							exact={true}
							channel={collection}
						>
							{collection.title}
						</NavLink>
					</HashRouter>
				</div>
			</div>
		)
	}
}

export default Collection;
