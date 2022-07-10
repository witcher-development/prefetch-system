import React from 'react';
import { Provider } from 'react-redux';

import { MainRouter } from '@router';
import { store } from '@store';
import { Prefetch } from '@prefetch';


export const App = () => (
	<Provider store={store}>
		<MainRouter />
		<Prefetch />
	</Provider>
);
