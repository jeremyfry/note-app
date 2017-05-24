import React from 'react';
import TextInput from './TextInput';

const LoginForm = () =>{
	return (
		<div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--centered mdl-cell--middle mdl-cell--6-col mdl-grid">
			<TextInput name="username" placeholder="User Name" onChange={()=>({})}/>
		</div>
	);
};

export default LoginForm;
