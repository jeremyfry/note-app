import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../tools/classNames';
class TextInput extends React.Component{

	render(){
		const {placeholder, passwordField} = this.props;
		const {dirty, active, touched, error} = this.props.meta;
		const {onChange, onBlur, onFocus, value, name} = this.props.input;

		const optionalClasses = {
			'is-dirty': dirty || value,
			'is-focused': active
		};

		return  (
			<div className={classNames('mdl-textfield mdl-textfield--full-width mdl-textfield--floating-label', optionalClasses)}>
				<input
					className="mdl-textfield__input"
					type={passwordField ? 'password' : 'text'}
					name={name}
					value={value}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onChange}/>
				<label className="mdl-textfield__label" htmlFor={name}>{placeholder}</label>
				{touched && error && <span className="mdl-textfield__error">{error}</span>}
			</div>
		);
	}
}

TextInput.propTypes = {
	placeholder: PropTypes.string,
	passwordField: PropTypes.bool,
	meta: PropTypes.object,
	input: PropTypes.object
};

export default TextInput;
