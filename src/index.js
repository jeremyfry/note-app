import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
	<AppContainer>
		<Root store={store} history={history}/>
	</AppContainer>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./components/Root', () => {
		const NewRoot = require('./components/Root').default;
		render(
			<AppContainer>
				<NewRoot store={store}/>
			</AppContainer>,
			document.getElementById('app')
		);
	});
}
