import { GEO_ACTIONS } from '../constants/constants';
import reducer from './geoReducer';
import initialState from './initialState';
describe('Reducers - GEO Reducer', () =>{
	it('should handle unset actions', ()=>{
		expect(reducer([], {})).toEqual([]);
	});

	it('should handle the UPDATE action for text', () =>{
		const geo = {lat: 1, lon: 2};
		const initial = {lat: 0, lon: 1};
		const expected = geo;
		const action = {
			type: GEO_ACTIONS.UPDATE,
			geo: geo
		};
		expect(reducer(initial, action)).toEqual(expected);
	});

	it('should handle the USE_CURRENT action for text', () =>{
		const initial = initialState.geo;
		const expected = {...initialState.geo, useCurrentLocation: true};
		const action = {
			type: GEO_ACTIONS.USE_CURRENT,
			value: true
		};
		expect(reducer(initial, action)).toEqual(expected);
	});
});
