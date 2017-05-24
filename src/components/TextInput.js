import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../tools/classNames';
class TextInput extends React.Component{
	// const handleChange = (e) => {
	// 	props.onChange(props.name, e.target.value);
	// };
	constructor(props) {
		super(props);
		this.state = { focused: false};
	}

	render(){
		const focus = () => {
			this.setState({focused: true});
		};
		const blur = () => {
			this.setState({focused: false});
		};
		const {placeholder, name, value, obscured, isDirty} = this.props;
		const optionalClasses = {
			'is-focused': this.state.focused,
			'is-dirty': isDirty
		};

		return <div className={classNames('mdl-textfield mdl-js-textfield mdl-textfield--floating-label', optionalClasses)}>
			<input
				className="mdl-textfield__input"
				type={obscured ? 'password' : 'text'}
				name={name}
				value={value}
				onFocus={focus}
				onBlur={blur}/>
			<label className="mdl-textfield__label" htmlFor={name}>{placeholder}</label>
		</div>;
	}
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default TextInput;
