import { NOTE_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action){
	switch (action.type){
		case NOTE_ACTIONS.UPDATE:
			return [
				...state.filter((note)=> note.id !== action.note.id),
				action.note
			].sort((a, b) => a.id > b.id);
		case NOTE_ACTIONS.INSERT:
			return [
				...state,
				action.note
			];
		case NOTE_ACTIONS.DELETE:
			return [
				...state.filter((note)=> note.id !== action.id)
			];
		default:
			return state;
	}
}
