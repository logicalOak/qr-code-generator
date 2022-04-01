import { useContext } from 'react';
import { InputContext } from './InputForm';

const InputField = () => {
	const { inputValue, setInputValue } = useContext(InputContext);

	const handleOnChange = (e) => {
		setInputValue({ ...inputValue, url: e.target.value });
	};
	return (
		<div>
			<label className='font-semibold text-md'>Your URL</label>
			<input
				type='url'
				name='url'
				className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm'
				value={inputValue.url}
				placeholder='https://example.com'
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default InputField;
