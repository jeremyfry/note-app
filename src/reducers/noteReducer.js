import { NOTE_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action){
	const getNextId = (notes) => {
		let highestId = 0;
		notes.forEach((note)=>{
			highestId = Math.max(note.id, highestId);
		});
		return highestId+1;
	};
	switch (action.type){
		case NOTE_ACTIONS.UPDATE:
			return {
				...state,
				noteList: [
					...state.noteList.filter((note)=> note.id !== action.note.id),
					{...action.note, editing: false}
				].sort((a, b) => a.id > b.id),
			};
		case NOTE_ACTIONS.INSERT:
			return {
				...state,
				newNoteVisible: false,
				noteList: [
					...state.noteList,
					{...action.note, id: getNextId(state.noteList)}
				]
			};
		case NOTE_ACTIONS.DELETE:
			return {...state, noteList: state.noteList.filter((note)=> note.id !== action.id)};
		case NOTE_ACTIONS.EDIT:
			return {
				...state,
				noteList: state.noteList.map((note) => {
					return (note.id === action.note.id) ? {...note, editing: true} : note;
				})
			};
		case NOTE_ACTIONS.CANCEL_EDIT:
			return {
				...state,
				newNoteVisible: false,
				noteList: state.noteList.map((note) => {
					return (note.editing) ? {...note, editing: false} : note;
				})
			};
		case NOTE_ACTIONS.CREATE_NEW:
			return {
				...state,
				newNoteVisible: true
			};
		default:
			return state;
	}
}
