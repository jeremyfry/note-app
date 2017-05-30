import {USER_ACTIONS, LOGIN_ACTIONS} from '../constants/constants';
import { push } from 'react-router-redux';
import axios from 'axios';
export const loginAsync = (userInfo) => {
	return (dispatch) => {
		// this would be a post, with password included.
		dispatch({
			type: LOGIN_ACTIONS.SET_ERROR,
			error: ""
		});
		return axios.get(`/mockBackend/${userInfo.username}.json`)
			.then(response => {
				dispatch({
					type: USER_ACTIONS.UPDATE,
					user: {...response.data, authenticated: true}
				});
				dispatch(push('/notes'));
			})
			.catch( () =>{
				dispatch({
					type: LOGIN_ACTIONS.SET_ERROR,
					error: "Invalid username or password"
				});
			});
	};
};

