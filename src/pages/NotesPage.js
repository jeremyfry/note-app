import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/noteActions';
import * as geoActions from '../actions/geoActions';
import Nav from '../components/Nav';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';

const NotesPage = (props) => {
	const {notes, actions, editableNote, geo} = props;
	const onSubmit = (values)=> {
		actions.saveNote(values);
	};

	const handleGeoUpdate = (value) => {
		actions.setUseCurrentLocation(value);
	};

	navigator.geolocation.getCurrentPosition(function(position) {
		actions.updateLocation(position.coords.latitude, position.coords.longitude);
	});

	return (
		<div className="mdl-layout mdl-layout--fixed-header ">
			<Nav/>
			<div className="note-page">
				{notes.map((note) => {
					return (
						<div key={note.id} className="note-card mdl-card mdl-cell mdl-cell--12-col mdl-grid--no-spacing mdl-shadow--2dp">
							<Note note={note} editAction={actions.editNote}/>
						</div>
					);
				})}
			</div>
			{editableNote && <NoteForm onSubmit={onSubmit} handleGeoUpdate={handleGeoUpdate} note={editableNote} geo={geo}/>}
		</div>
	);
};

export default connect(
	(state)=>({
		notes: state.notes,
		editableNote: state.notes.filter((note) => note.editing)[0],
		geo: state.geo
	}),
	(dispatch) => ({ actions: bindActionCreators({...actions, ...geoActions}, dispatch)})
)(NotesPage);
