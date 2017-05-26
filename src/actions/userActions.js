import {USER_ACTIONS} from '../constants/constants';
import { push } from 'react-router-redux';
import axios from 'axios';
export const loginAsync = (userInfo) => {
	return (dispatch) => {
		// this would be a post, with password included.
		return axios.get(`/mockBackend/${userInfo.username}.json`)
			.then(response => {
				dispatch({
					type: USER_ACTIONS.UPDATE,
					user: {...response, authenticated: true}
				});
				dispatch(push('/notes'));
			})
			.catch( () =>{
				//Handle invalid login
			});
	};
};

