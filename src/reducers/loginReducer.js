import { LOGIN_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action){
	switch (action.type){
		case LOGIN_ACTIONS.SET_ERROR:
			return {...state, error: action.error};
		default:
			return state;
	}
}
