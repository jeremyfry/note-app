import { NOTE_ACTIONS } from '../constants/constants';
import reducer from './noteReducer';
import initialState from './initialState';

describe('Reducers - Note Reducer', () => {
	it('should handle unset actions', ()=>{
		expect(reducer([], {})).toEqual([]);
	});

	it('should handle the INSERT action', () => {
		const note = { text: 'Text', geo: { lat: 1, lon: 2}};
		const expected = {...initialState.notes, noteList: [...initialState.notes.noteList, {...note, id: 1}]};

		const action = {
			type: NOTE_ACTIONS.INSERT,
			note
		};
		const newState = reducer(initialState.notes, action);
		expect(newState).toEqual(expected);

		const expected2 = {...newState, noteList: [...newState.noteList, {...note, id: 2}]};
		expect(reducer(newState, action)).toEqual(expected2);
	});

	it('should handle the UPDATE action for text', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = {...initialState.note, noteList: [note, {...note, id: 2}]};
		const expected = {...initialState.note, noteList: [{...note, text: "Updated text", editing: false}, {...note, id: 2}]};
		const action = {
			type: NOTE_ACTIONS.UPDATE,
			note: {...note, text: 'Updated text'}
		};
		expect(reducer(initial, action)).toEqual(expected);
	});

	it('should handle the UPDATE action for geo', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = {noteList: [note]};
		const expected = {noteList: [{...note, geo: {lat: 2, lon: 2}, editing: false}]};
		const action = {
			type: NOTE_ACTIONS.UPDATE,
			note: {...note, geo: {lat: 2, lon: 2}}
		};
		expect(reducer(initial, action)).toEqual(expected);
	});


	it('should handle the DELETE action', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = {noteList: [note, {...note, id: 2}]};
		const expected = {noteList: [{...note}]};
		const action = {
			type: NOTE_ACTIONS.DELETE,
			id: 2
		};
		expect(reducer(initial, action)).toEqual(expected);
	});

	it('should handle the CANCEL_EDIT action', () => {
		const note = { id: 1, text: 'Text', editing: true};
		const initial = {noteList: [note]};
		const expected = {newNoteVisible: false, noteList: [{...note, editing: false}]};
		const action = {
			type: NOTE_ACTIONS.CANCEL_EDIT
		};
		expect(reducer(initial, action)).toEqual(expected);
	});

	it('should handle the SET_INITIAL action', () => {
		const notes = [{ id: 1, text: 'Text', editing: true}];
		const initial = {};
		const expected = {noteList: notes};
		const action = {
			type: NOTE_ACTIONS.SET_INITIAL,
			notes
		};
		expect(reducer(initial, action)).toEqual(expected);
	});
});
