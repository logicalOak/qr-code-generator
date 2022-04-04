import { useDispatch } from 'react-redux';
import { useState, createContext, useEffect } from 'react';
import { InputField, InputColor } from './index';
// import { fetchData } from '../redux/qr/actions';
import { fetchData } from '../features/qr/qrSlice';

export const InputContext = createContext();
const InputForm = () => {
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState({
		url: '',
		color: '',
	});
	// const bodyParameters = {
	// 	colorDark: inputValue.color,
	// 	qrCategory: 'url',
	// 	text: inputValue.url,
	// };

	const color = inputValue.color;
	const url = inputValue.url;
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchData({ color, url }));
	};

	// console.log(imageURL, loading, error);
	// useEffect(() => {
	// 	dispatch(fetchData(bodyParameters, config));
	// }, []);

	const value = {
		inputValue,
		setInputValue,
	};

	return (
		<div className='col-span-2 p-6 grid gap-4'>
			<InputContext.Provider value={value}>
				<InputField />
				<InputColor />
			</InputContext.Provider>

			<button
				disabled={!inputValue.url}
				onClick={handleSubmit}
				className='bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300'
			>
				Generate QrCode
			</button>
		</div>
	);
};

export default InputForm;
