import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/login/LoginForm';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/loginActions';
import PropTypes from 'prop-types';

const LoginPage = (props) => {
	const {actions, login} = props;
	const submit = (values) => {
		actions.loginAsync(values);
	};
	return (
		<div className="mdl-layout mdl-layout--row mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<LoginForm onSubmit={submit} errorMessage={login.error}/>
		</div>
	);
};

LoginPage.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(
	(state)=>({login: state.login}),
	(dispatch) => ({ actions: bindActionCreators({...actions}, dispatch)})
)(LoginPage);
