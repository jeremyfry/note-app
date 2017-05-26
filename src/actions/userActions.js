import {USER_ACTIONS} from '../constants/constants';
export const loginAsync = () => {
	return (dispatch) => {
		//dispatch(increment());

		return fetch('url').then(response => {
			dispatch({
				type: USER_ACTIONS.UPDATE,
				user: {...response, authenticated: true}
			});
		}, (error) =>{
			//Handle invalid login
		});
	};
};

