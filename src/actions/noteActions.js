import {NOTE_ACTIONS} from '../constants/constants';
import {push} from 'react-router-redux';

export const editNote = (note) => ({
	type: NOTE_ACTIONS.EDIT,
	note: note
});

export const saveNote = (note) => ({
	type: (note.id) ? NOTE_ACTIONS.SAVE : NOTE_ACTIONS.INSERT,
	note: note
});
