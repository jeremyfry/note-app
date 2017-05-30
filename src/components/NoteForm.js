import React, { Component } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import { Field, reduxForm } from 'redux-form';
import validate from '../formValidations/loginForm.validation';
import PropTypes from 'prop-types';
import StaticMap from '../components/StaticMap';

class NoteForm extends Component {
	render() {
		const { handleSubmit, handleGeoUpdate, note, geo } = this.props;
		const {lat, lon} = (geo.useCurrentLocation) ? geo : note.geo;
		const geoToggle = (event, value) => {
			handleGeoUpdate(value);
		};
		return (
			<form onSubmit={handleSubmit}>
				<div className="mdl-card__supporting-text mdl-grid">
					<div className="mdl-cell mdl-cell--12-col">
						<Field component={TextInput} name="title" value={note.title} placeholder="Title"/>
					</div>
					<div className="mdl-cell mdl-cell--7-col">
						<Field component={TextArea} name="text" value={note.text} placeholder="Text"/>
					</div>
					<div className="mdl-cell mdl-cell--5-col">
						<StaticMap lat={lat} lon={lon} canUpdate={true}/>
						<Field component={Checkbox} name="useUpdatedLocation" placeholder="Use Current Location?" onChange={geoToggle}/>
					</div>
				</div>
				<div className="mdl-card__actions mdl-card--border">
					<button type="submit" className="mdl-button mdl-button--right mdl-button--raised mdl-button--accent">Save</button>
				</div>
			</form>
		);
	}
}

NoteForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	handleGeoUpdate: PropTypes.func.isRequired,
	geo: PropTypes.object.isRequired
};

export default reduxForm({
	form: 'note',
	validate
})(NoteForm);
