import { combineReducers } from 'redux';
import notes from './noteReducer';
import user from './userReducer';

export default combineReducers({
	notes,
	user
});
