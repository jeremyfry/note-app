import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/login/LoginForm';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';
import PropTypes from 'prop-types';

const LoginPage = (props) => {
	const {actions} = props;
	const submit = (values) => {
		actions.loginAsync(values);
	};
	return (
		<div className="mdl-layout mdl-layout--row mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<LoginForm onSubmit={submit}/>
		</div>
	);
};

LoginPage.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(
	()=>({}),
	(dispatch) => ({ actions: bindActionCreators({...actions}, dispatch)})
)(LoginPage);
