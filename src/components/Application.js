import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home  from './Home';
import Library  from './Library';
import About  from './About';
import './Application.css';

const Application = () => (<HashRouter>
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/library" component={Library}/>
		<Route path="/about" component={About}/>
	</Switch>
</HashRouter>);

Application.displayName = 'Application';

export default Application;
