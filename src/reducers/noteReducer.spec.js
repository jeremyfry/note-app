import { NOTE_ACTIONS } from '../constants/constants';
import reducer from './noteReducer';


describe('Reducers - Note Reducer', () => {
	it('should handle unset actions', ()=>{
		expect(reducer([], {})).toEqual([]);
	});

	it('should handle the INSERT action', () => {
		const note = { text: 'Text', geo: { lat: 1, lon: 2}};
		const expected = [{...note, id: 5}];
		const action = {
			type: NOTE_ACTIONS.INSERT,
			note
		};
		expect(reducer([], action)).toEqual(expected);
	});

	it('should handle the UPDATE action for text', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = [note, {...note, id: 2}];
		const expected = [{...note, text: 'Updated text'}, {...note, id: 2}];
		const action = {
			type: NOTE_ACTIONS.UPDATE,
			note: {...note, text: 'Updated text'}
		};
		expect(reducer(initial, action)).toEqual(expected);
	});

	it('should handle the UPDATE action for geo', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = [note, {...note, id: 2}];
		const expected = [{...note, geo: {lat: 2, lon: 2}}, {...note, id: 2}];
		const action = {
			type: NOTE_ACTIONS.UPDATE,
			note: {...note, geo: {lat: 2, lon: 2}}
		};
		expect(reducer(initial, action)).toEqual(expected);
	});


	it('should handle the DELETE action', () => {
		const note = { id: 1, text: 'Text', geo: { lat: 1, lon: 2}};
		const initial = [note, {...note, id: 2}];
		const expected = [{...note}];
		const action = {
			type: NOTE_ACTIONS.DELETE,
			id: 2
		};
		expect(reducer(initial, action)).toEqual(expected);
	});
});
