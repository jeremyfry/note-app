import {GEO_ACTIONS} from '../constants/constants';
export const updateLocation = (lat, lon) => ({
	type: GEO_ACTIONS.UPDATE,
	geo: {lat, lon}
});

export const setUseCurrentLocation = (value) => {
	return (dispatch) =>{
		dispatch({
			type: GEO_ACTIONS.USE_CURRENT,
				value
		});
		navigator.geolocation.getCurrentPosition(function (position){
			dispatch({
				type: GEO_ACTIONS.UPDATE,
				geo: {lat: position.coords.latitude, lon: position.coords.longitude}
			});
		});
	};
};
