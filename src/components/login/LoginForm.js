import React, { Component } from 'react';
import TextInput from '../formElements/TextInput';
import { Field, reduxForm } from 'redux-form';
import validate from '../../formValidations/loginForm.validation';
import PropTypes from 'prop-types';

class LoginForm extends Component {
	render() {
		const { handleSubmit, errorMessage } = this.props;
		return (
			<form onSubmit={handleSubmit} className="login-form mdl-card mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--centered mdl-cell--middle mdl-cell--6-col">
				<div className="login-form-media mdl-card__media mdl-color-text--grey-100">
					<h3>Login</h3>
				</div>
				<div className="mdl-card__supporting-text">
					<Field component={TextInput} name="username" placeholder="Email Address"/>
					<Field component={TextInput} name="password" passwordField placeholder="Password"/>
					<span className="mdl-color-text--red">{errorMessage}</span>
				</div>
				<div className="mdl-card__actions mdl-card--border">
					<button type="submit" className="mdl-button mdl-button--right mdl-button--raised mdl-button--accent">Log In</button>
				</div>
			</form>
		);
	}
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	error: PropTypes.string
};

export default reduxForm({
	form: 'login',
	validate
})(LoginForm);
