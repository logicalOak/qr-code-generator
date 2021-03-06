import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	imgUrl: '',
	loading: false,
	error: null,
};

// Асинхр метод
export const fetchData = createAsyncThunk(
	'some/exampleFetch',
	async ({ color, url }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(
				'https://qrtiger.com/api/qr/static',
				{
					colorDark: color,
					text: url,
					qrCategory: 'url',
				},
				{
					headers: {
						Authorization: `Bearer 8b678710-d205-11ec-8345-e59fe93e3dc2`,
						'Content-Type': 'application/json',
					},
				}
			);
			return data;
		} catch (e) {
			console.log(e.message);
		}
	}
);

export const qrSlice = createSlice({
	name: 'qr',
	initialState,
	extraReducers: {
		[fetchData.pending]: (state) => {
			state.loading = true;
		},
		[fetchData.fulfilled]: (state, { payload }) => {
			state.imgUrl = payload;
			state.loading = false;
		},
		[fetchData.rejected]: (state) => {
			state.error = true;
		},
	},
});

export default qrSlice.reducer;
