import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
		<Application />
	</HashRouter>,
	document.getElementById('root'));
registerServiceWorker();
