import {GEO_ACTIONS} from '../constants/constants';
export const updateLocation = (lat, lon) => ({
	type: GEO_ACTIONS.UPDATE,
	geo: {lat, lon}
});

export const setUseCurrentLocation = (value) => ({
	type: GEO_ACTIONS.USE_CURRENT,
	value
});
