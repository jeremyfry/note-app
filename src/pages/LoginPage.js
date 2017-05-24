import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
	return (
		<div className="mdl-layout mdl-layout--row mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<LoginForm/>
		</div>
	);
};

export default LoginPage;
