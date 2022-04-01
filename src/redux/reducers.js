import { combineReducers } from 'redux';
import { qrReducer } from './qr/reducer';

export const rootReducer = combineReducers({
	qr: qrReducer,
});
