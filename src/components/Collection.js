import React, {Component} from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import FaFolder from 'react-icons/lib/fa/folder'
import FaFolderOpen from 'react-icons/lib/fa/folder-open'
import { channelDefault } from '../data/default';
import PropTypes from 'prop-types';
import './Collection.css';

class Collection extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'Collection';
	
	state = {
		showDetail: false
	};
	
	handleClick = () => {
		this.setState({
			showDetail : !this.state.showDetail
		});
	};
	
	render() {
		const collection = this.props.collection;
		const {
			description_short,
			description_long,
			link,
			owner_name,
			owner_email
		} = this.props.collection;
		
		const url = `/library/${collection.title}`;
		const detail = (<div className="item-col-details">
			<p>{description_short? description_short: null}</p>
			<p>{description_long? description_long: null}</p>
			<p>{owner_name? owner_name: null} {'| '} {owner_email? owner_email: null}</p>
			<p>{link? link: null}</p>
		</div>);
		
		return (
			<div className="container-collection">
				<div className="item-collection">
					<div className="item-col-title">
						<div className="item-opener" onClick={this.handleClick}>
							{this.state.showDetail? <FaFolderOpen/> : <FaFolder/>}
						</div>
						<div className="item-coll-link">
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
					<div className="item-col-detail">
						{this.state.showDetail ? detail : null}
					</div>
				</div>
			</div>
		)
	}
}

export default Collection;
