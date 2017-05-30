const noteFormValidation = (values) =>{
	const errors = {};
	if (!values.title){
		errors.title = "Title required";
	}

	if (!values.text){
		errors.text = "Note must contain text";
	}
	return errors;
};
export default noteFormValidation;
