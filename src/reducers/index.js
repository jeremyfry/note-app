import { combineReducers } from 'redux';
import notes from './noteReducer';
import user from './userReducer';
import geo from './geoReducer';
import login from './loginReducer';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
	notes,
	user,
	geo,
	login,
	form,
	routing
});
