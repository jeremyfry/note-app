const loginFormValidation = (values) =>{
	const errors = {};
	if (!values.username){
		errors.username = "Username required";
	}

	if (!values.password){
		errors.password = "Password required";
	}
	return errors;
};
export default loginFormValidation;
