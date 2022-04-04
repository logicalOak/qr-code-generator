import { configureStore } from '@reduxjs/toolkit';
import qrReducer from '../features/qr/qrSlice';

// Создаем store с редюсером

export const store = configureStore({
	reducer: {
		qr: qrReducer,
	},
});
