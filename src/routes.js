import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={LoginPage}/>
		<Route path="/notes" component={NotesPage}/>
	</Route>
);
