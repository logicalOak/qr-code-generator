import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import { store } from './redux';
import { store } from './app/store';
import './index.scss';

/**
 * Render Components
 */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
