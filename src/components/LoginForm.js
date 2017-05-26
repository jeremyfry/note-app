import React, { Component } from 'react';
import TextInput from './TextInput';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit} className="login-form mdl-card mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--centered mdl-cell--middle mdl-cell--6-col">
				<div className="login-form-media mdl-card__media mdl-color-text--grey-100">
					<h3>Login</h3>
				</div>
				<div className="mdl-card__supporting-text">
					<Field component={TextInput} name="username" placeholder="Email Address"/>
					<Field component={TextInput} name="password" passwordField placeholder="Password"/>
					<button type="submit" className="mdl-button mdl-button--right mdl-button--raised mdl-button--accent">Submit</button>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login'
})(LoginForm);
