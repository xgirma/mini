import React, {Component} from 'react';
import owl from './owl-searching.svg'
import rat from './rat.svg'
import './NoMatch.css';

class NoMatch extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	displayName = 'NoMatch';
	
	state = {};
	
	render() {
		const quote = 'Some beautiful paths can not be discovered without getting lost. Erol Ozan';
		return (
			<div className="container-no-match">
				<div className="item-not-found">
					<p>{'Page Not Found'}</p>
				</div>
				<img src={owl} className="item-owl" alt="logo" />
				<img src={rat} className="item-rat" alt="logo" />
				<div className="item-quote">
					<p>{`${quote}`}</p>
				</div>
			</div>
		)
	}
}

export default NoMatch;