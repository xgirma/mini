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
		
		return (
			<div className="container-collection">
				<div className="item-collection">
					<HashRouter>
						<NavLink
							to={`/library/${collection.title}`}
							exact={true}
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
