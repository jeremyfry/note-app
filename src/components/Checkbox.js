import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../tools/classNames';
class Checkbox extends React.Component{

	render(){
		const {placeholder} = this.props;
		const {dirty, active, touched, error} = this.props.meta;
		const {name, onChange} = this.props.input;

		const optionalClasses = {
			'is-checked': true
		};

		return  (
			<div className={classNames('mdl-textfield mdl-textfield--full-width mdl-textfield--floating-label', optionalClasses)}>
				<label className="mdl-checkbox" htmlFor={name}>
					<input type="checkbox" className="mdl-checkbox__input" onChange={onChange}/>
					<span className="mdl-checkbox__label">{placeholder}</span>
				</label>
			</div>
		);
	}
}

Checkbox.propTypes = {
	placeholder: PropTypes.string,
	meta: PropTypes.object,
	input: PropTypes.object
};

export default Checkbox;
