import axios from 'axios';

export const SET_LOADING = '@@qr/SET_LOADING';
export const SET_ERROR = '@@qr/SET_ERROR';
export const SET_DATA = '@@qr/SET_DATA';

// синхронные экшены
export const qrActions = {
	setLoading: (payload) => ({ type: SET_LOADING, payload }),
	setError: (payload) => ({ type: SET_ERROR, payload }),
	setData: (payload) => ({ type: SET_DATA, payload }),
};

// асинхронный экшн
export const fetchData = (bodyParameters, config) => async (dispatch) => {
	try {
		dispatch(qrActions.setLoading(true)); // началась загрузка
		const { data } = await axios.post(
			'https://qrtiger.com/api/qr/static',
			bodyParameters,
			config
		);
		dispatch(qrActions.setData(data.url));
	} catch (e) {
		dispatch(qrActions.setError(e.message));
	} finally {
		dispatch(qrActions.setLoading(false));
	}
};
