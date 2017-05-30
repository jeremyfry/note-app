import React, { Component } from 'react';
import TextInput from '../formElements/TextInput';
import TextArea from '../formElements/TextArea';
import Checkbox from '../formElements/Checkbox';
import { Field, reduxForm } from 'redux-form';
import validate from '../../formValidations/noteForm.validation';
import PropTypes from 'prop-types';
import StaticMap from './StaticMap';
import noteModel from '../../reducers/noteModel';

class NoteForm extends Component {
	render(){
		const {handleSubmit, handleGeoUpdate, geo, cancelAction} = this.props;
		const note = this.props.note ?  this.props.note : noteModel;
		const {lat, lon} = (!note.geo || geo.useCurrentLocation) ? geo : note.geo;
		const geoToggle = (event, value) =>{
			handleGeoUpdate(value);
		};
		return (
			<div className="modal">
				<form onSubmit={handleSubmit}
						className="modal-card mdl-card mdl-shadow--16dp mdl-cell mdl-cell--centered mdl-cell--middle mdl-cell--6-col">
					<div className="mdl-card__supporting-text mdl-grid">
						<div className="mdl-cell mdl-cell--12-col">
							<Field component={TextInput} name="title" value={note.title} placeholder="Title"/>
						</div>
						<div className="mdl-cell mdl-cell--7-col">
							<Field component={TextArea} name="text" value={note.text} placeholder="Text"/>
						</div>
						<div className="mdl-cell mdl-cell--5-col">
							<StaticMap lat={lat} lon={lon} canUpdate={true}/>
							{note.geo && <Field component={Checkbox} name="useUpdatedLocation" placeholder="Use Current Location?"
									 onChange={geoToggle} value={geo.useCurrentLocation}/>}
						</div>
					</div>
					<div className="mdl-card__actions mdl-card--border mdl-card__actions--two-actions">
						<button onClick={cancelAction}
								  className="mdl-button mdl-button--right ">Cancel
						</button>

						<button type="submit" className="mdl-button mdl-button--right mdl-button--raised">
							Save Note
						</button>
					</div>
				</form>
			</div>
		);
	}
}

NoteForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	cancelAction: PropTypes.func.isRequired,
	handleGeoUpdate: PropTypes.func.isRequired,
	geo: PropTypes.object.isRequired
};

export default reduxForm({
	form: 'note',
	validate
})(NoteForm);
