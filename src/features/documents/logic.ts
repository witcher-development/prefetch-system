import { useEffect } from 'react';

import { store } from '@store';
import { api } from '@documents';


export const fetchDocumentsPageData = async () => {
	const pageData = store.getState().documentsPageState;
	if (pageData.state !== 'not_loaded') return;

	const setPageState = store.dispatch.documentsPageState.setPageState;

	setPageState({
		state: 'loading'
	});
	setPageState({
		state: 'loaded',
		data: await api.fetchDocumentsPageData()
	});
};

export const useFetchDocumentsPageData = () => {
	useEffect(() => {
		fetchDocumentsPageData();
	}, []);
};
