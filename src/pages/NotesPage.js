import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/noteActions';
import * as geoActions from '../actions/geoActions';
import Nav from '../components/layout/Nav';
import Note from '../components/notes/Note';
import NoteForm from '../components/notes/NoteForm';

class NotesPage extends React.Component {
	componentWillMount(){
		this.props.actions.fetchNotes();
	}
	render(){
		const {actions, editableNote, geo, notes} = this.props;
		const {noteList} = notes;
		const onSubmit = (values)=> {
			actions.saveNote(values);
		};
		const cancelEdit = (values)=> {
			actions.cancelEdit();
		};
		const handleGeoUpdate = (value) => {
			actions.setUseCurrentLocation(value);
		};
		const editNew = () => {
			actions.setUseCurrentLocation(true);
			actions.editNew();
		};
		return (
			<div className="mdl-layout mdl-layout--fixed-header ">
				<Nav/>
				<div className="note-page">
					{noteList.map((note) => {
						return (
							<div key={note.id} className="note-card mdl-card mdl-cell mdl-cell--12-col mdl-grid--no-spacing mdl-shadow--2dp">
								<Note note={note} editAction={actions.editNote}/>
							</div>
						);
					})}
				</div>
				{(notes.newNoteVisible || editableNote) && <NoteForm initialValues={editableNote} cancelAction={cancelEdit} onSubmit={onSubmit} handleGeoUpdate={handleGeoUpdate} note={editableNote} geo={geo}/>}
				<button onClick={editNew} className="mdl-button mdl-button--fab mdl-button--colored note-page__add-new">
					<i className="material-icons">add</i>
				</button>
			</div>
		);
	}
}

export default connect(
	(state)=>({
		notes: state.notes,
		editableNote: state.newNote || state.notes.noteList.filter((note) => note.editing)[0],
		geo: state.geo
	}),
	(dispatch) => ({ actions: bindActionCreators({...actions, ...geoActions}, dispatch)})
)(NotesPage);
