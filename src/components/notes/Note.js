import React from 'react';
import { FormattedDate } from 'react-intl';
import StaticMap from './StaticMap';

const NoteComponent = (props) =>{
	const {note, editAction} = props;
	const edit = () =>{
		editAction(note);
	};
	return (
		<div>
			<div className="mdl-card__supporting-text mdl-grid">
				<h4 className="note-card__title mdl-cell mdl-cell--8-col">{note.title}</h4>
				<span className="note-card__date-author-block mdl-cell mdl-cell--4-col">
					<div className="note-card__author">{note.createdBy}</div>
					on <FormattedDate value={note.date} day="numeric" month="short" year="numeric"/>
				</span>
				<div className="mdl-cell mdl-cell--7-col">
					<div>{note.text}</div>
				</div>
				<div className="mdl-cell mdl-cell--5-col">
					<StaticMap lat={note.geo.lat} lon={note.geo.lon}/>
				</div>
			</div>
			<div className="mdl-card__actions">
				<button className="mdl-button mdl-button--right mdl-button--raised mdl-button--accent" onClick={edit}>Edit
				</button>
			</div>
		</div>
	);
};

export default NoteComponent;
