import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/App';
import Main from './components/Main';

function routeSession(s, cb) {
	System.import('./components/Session').then(component => {
		cb(null, component.default || component);
	});
}


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main}/>
		<Route path="session/:slot/:session" getComponent={routeSession}/>
	</Route>
);
