import { InputForm, QrCode } from './components';
import { createContext, useState } from 'react';
import axios from 'axios';

// create Context
export const InputContext = createContext();
const App = () => {
	const [inputValue, setInputValue] = useState({
		url: '',
		color: '',
	});

	const [response, setResponse] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const config = {
		headers: {
			Authorization: 'Bearer cc229a60-af5a-11ec-bbba-7f0ed120ba04',
		},
	};

	const bodyParameters = {
		colorDark: inputValue.color,
		// "eye_outer": "eyeOuter2",
		// "eye_inner": "eyeInner1",
		// "qrData": "pattern0",
		// "backgroundColor": "rgb(255,255,255)",
		// "transparentBkg": false,
		qrCategory: 'url',
		text: inputValue.url,
	};

	const getQrCode = async () => {
		try {
			setLoading(true);
			const res = await axios.post(
				'https://qrtiger.com/api/qr/static',
				bodyParameters,
				config
			);
			setResponse(res.data.url);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const value = {
		inputValue,
		setInputValue,
		getQrCode,
		response,
		error,
		loading,
	};

	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2'>
			<div className='container mx-auto max-w-4xl bg-white rounded-md shadow'>
				<div className='md:grid md:grid-cols-3'>
					<InputContext.Provider value={value}>
						<InputForm />
						<QrCode />
					</InputContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default App;
