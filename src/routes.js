import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import LoginPage from './pages/LoginPage';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={LoginPage}/>
		{/*<Route path="/notes" component={NotesPage}/>*/}
	</Route>
);
