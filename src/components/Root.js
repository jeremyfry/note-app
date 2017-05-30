import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
class Root extends Component {
	render(){
		const {store} = this.props;
		return (
			<Provider store={store}>
				<IntlProvider locale="en">
					<Router routes={routes} history={browserHistory}/>
				</IntlProvider>
			</Provider>
		);
	}
}
Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;

