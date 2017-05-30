import React from 'react';
import NoteForm from './NoteForm';

class NoteEdit extends React.Component {
	render() {

		const {note} = this.props;
		return (
			<div className="mdl-layout mdl-layout--row mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
				<NoteForm onSubmit={onSubmit} note={note}/>
			</div>
		);
	}
}

export default NoteEdit;
