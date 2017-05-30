import { NOTE_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action){
	let noteId = 5; //This is bad. Would rely on backend to give me this
	switch (action.type){
		case NOTE_ACTIONS.UPDATE:
			return [
				...state.filter((note)=> note.id !== action.note.id),
				action.note
			].sort((a, b) => a.id > b.id);
		case NOTE_ACTIONS.INSERT:
			return [
				...state,
				{...action.note, id: noteId++}
			];
		case NOTE_ACTIONS.DELETE:
			return state.filter((note)=> note.id !== action.id);
		case NOTE_ACTIONS.EDIT:
			return state.map((note) => {
				return (note.id === action.note.id) ? {...note, editing: true} : note;
			});
		default:
			return state;
	}
}
