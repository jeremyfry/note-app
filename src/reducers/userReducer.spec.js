import { USER_ACTIONS, USER_ROLES } from '../constants/constants';
import reducer from './userReducer';


describe('Reducers - User Reducer', () => {
	it('should handle unset actions', ()=>{
		expect(reducer({}, {})).toEqual({});
	});

	it('should handle the LOGOUT action', () => {
		const user = { authenticated: true, username: 'name' };
		const expected = { authenticated: false };
		const action = {
			type: USER_ACTIONS.LOGOUT
		};
		expect(reducer(user, action)).toEqual(expected);
	});

	it('should handle the UPDATE action for user', () => {
		const user = { authenticated: true, username: 'name', role:  USER_ROLES.OWNER};
		const expected = { authenticated: true, username: 'New Name', role:  USER_ROLES.MANAGER};
		const action = {
			type: USER_ACTIONS.UPDATE,
			user: {...user, username: 'New Name', role: USER_ROLES.MANAGER}
		};
		expect(reducer(user, action)).toEqual(expected);
	});
});
