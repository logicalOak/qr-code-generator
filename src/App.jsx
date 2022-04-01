import { InputForm, QrCode } from './components';

const App = () => {
	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2'>
			<div className='container mx-auto max-w-4xl bg-white rounded-md shadow'>
				<div className='md:grid md:grid-cols-3'>
					<InputForm />
					<QrCode />
				</div>
			</div>
		</div>
	);
};

export default App;
