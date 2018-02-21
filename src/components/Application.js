import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home  from './Home';
import Library  from './Library';
import About  from './About';
import NoMatch  from './NoMatch';
import Menu  from './Menu';
import './Application.css';

const Application = () => (<div>
		<Menu />
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/library" component={Library}/>
				<Route path="/about" component={About}/>
				<Route component={NoMatch}/>
			</Switch>
		</HashRouter>
	</div>
);

Application.displayName = 'Application';

export default Application;
