import { USER_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action){
	switch (action.type){
		case USER_ACTIONS.LOGOUT:
			return { authenticated: false };
		case USER_ACTIONS.UPDATE:
			return {...state, ...action.user};
		default:
			return state;
	}
}
