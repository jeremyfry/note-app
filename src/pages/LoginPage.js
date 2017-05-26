import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';

const LoginPage = () => {
	const submit = (values) => {
		// Do something with the form values
		console.log(values);
	};
	return (
		<div className="mdl-layout mdl-layout--row mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<LoginForm onSubmit={submit}/>
		</div>
	);
};

export default connect(
	(state)=>({}),
	(dispatch) => ({ actions: bindActionCreators(Object.assign({}, actions), dispatch) })
)(LoginPage);
