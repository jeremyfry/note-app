import { GEO_ACTIONS } from '../constants/constants';
import initialState from './initialState';

export default function geoReducer(state = initialState.geo, action){
	switch (action.type){
		case GEO_ACTIONS.UPDATE:
			return {...state, lat: action.geo.lat, lon: action.geo.lon};
		case GEO_ACTIONS.USE_CURRENT:
			return {...state, useCurrentLocation: action.value};
		default:
			return state;
	}
}
