import {NOTE_ACTIONS, GEO_ACTIONS} from '../constants/constants';
import axios from 'axios';

export const editNote = (note) => ({
	type: NOTE_ACTIONS.EDIT,
	note: note
});

export const saveNote = (note) => {
	return (dispatch, getState) => {
		const state = getState();
		const now = new Date();
		// server should handle these
		const updatedNote = {
			...note,
			createdBy: state.user.username,
			date: now.toString(),
			geo: (!note.id || state.geo.useCurrentLocation) ? state.geo : note.geo
		};

		dispatch({
			type: (note.id) ? NOTE_ACTIONS.UPDATE : NOTE_ACTIONS.INSERT,
			note: updatedNote
		});
		dispatch({
			type: GEO_ACTIONS.USE_CURRENT,
			value: false
		});
	}
};

export const cancelEdit = (note) => {
	return (dispatch) => {
		dispatch({
			type: NOTE_ACTIONS.CANCEL_EDIT
		});
		dispatch({
			type: GEO_ACTIONS.USE_CURRENT,
			value: false
		});
	}
};

export const editNew = () => ({
	type: NOTE_ACTIONS.CREATE_NEW
});

export const fetchNotes = () => {
	return (dispatch) => {
		return axios.get('/mockBackend/notes.json')
			.then(response => {
				dispatch({
					type: NOTE_ACTIONS.SET_INITIAL,
					notes: response.data
				});
			})
			.catch(() => {
				//show an error
			});
	}
};
