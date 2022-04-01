import { SET_DATA, SET_ERROR, SET_LOADING } from './actions';

const initialState = {
	imageURL: '',
	loading: false,
	error: false,
};

export const qrReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				loading: payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: payload,
			};
		case SET_DATA:
			return {
				...state,
				imageURL: payload,
			};
		default:
			return state;
	}
};
