import { useEffect } from 'react';

import { store } from '@store';
import { api } from '@home';


export const fetchHomePageData = async () => {
	console.log('fetchHomePageData init');

	const pageData = store.getState().homePageState;
	if (pageData.state !== 'not_loaded') return;

	console.log('fetchHomePageData started');

	const setPageState = store.dispatch.homePageState.setPageState;

	setPageState({
		state: 'loading'
	});
	setPageState({
		state: 'loaded',
		data: await api.fetchHomePageData()
	});
};

export const useFetchHomePageData = () => {
	useEffect(() => {
		fetchHomePageData();
	}, []);
};
