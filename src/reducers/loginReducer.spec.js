import { LOGIN_ACTIONS } from '../constants/constants';
import reducer from './loginReducer';
describe('Reducers - Login Reducer', () =>{
	it('should handle unset actions', ()=>{
		expect(reducer({}, {})).toEqual({});
	});

	it('should handle the SET ERROR action', () =>{
		const initial = {};
		const expected = {error: 'test'};
		const action = {
			type: LOGIN_ACTIONS.SET_ERROR,
			error: 'test'
		};
		expect(reducer({}, action)).toEqual(expected);
	});
});
