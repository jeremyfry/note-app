import { combineReducers } from 'redux';
import notes from './noteReducer';
import user from './userReducer';
import { reducer as form } from 'redux-form'

export default combineReducers({
	notes,
	user,
	form
});
