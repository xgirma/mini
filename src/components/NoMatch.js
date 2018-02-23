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
		const quote = ` \n `;
		return (
			<div className="container-no-match">
				<img src={owl} className="item-owl" alt="logo" />
				<img src={rat} className="item-rat" alt="logo" />
				<div className="item-quote">
					<p>
						<span style={{fontSize: '15px'}}>Some</span>
						<span style={{fontSize: '25px'}}> beautiful</span>
						<span style={{fontSize: '35px'}}> paths</span>
						<span style={{fontSize: '45px'}}> can</span>
						<span style={{fontSize: '55px'}}> not</span>
						<span style={{fontSize: '65px'}}> be</span>
						<span style={{fontSize: '45px'}}> discovered</span>
						<span style={{fontSize: '35px'}}> without </span>
						<span style={{fontSize: '25px'}}> getting</span>
						<span style={{fontSize: '45px'}}> lost.</span>
						<span style={{fontSize: '10px'}}> Erol Ozan</span>
					</p>
				</div>
			</div>
		)
	}
}

export default NoMatch;