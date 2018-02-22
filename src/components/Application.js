import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home  from './Home';
import Library  from './Library';
import About  from './About';
import NoMatch  from './NoMatch';
import Header  from './Header';
import './Application.css';

const Application = () => (<div className="container-app">
		<div className="item-header">
			<Header />
		</div>
		<div className="item-body">
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/library" component={Library}/>
					<Route path="/about" component={About}/>
					<Route component={NoMatch}/>
				</Switch>
			</HashRouter>
		</div>
	</div>
);

Application.displayName = 'Application';

export default Application;
