import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { NavBar } from '@common/NavBar';

import { useFetchDocumentsPageData } from './logic';


export const DocumentsPage = () => {
	useEffect(() => {
		console.log('DocumentsPage render');
	}, []);

	useFetchDocumentsPageData();
	const pageData = useSelector((state: RootState) => state.documentsPageState);

	if (pageData.state === 'not_loaded') {
		return <>havent started loading yet</>;
	}

	if (pageData.state !== 'loaded') {
		return <>loading</>;
	}

	return (
		<div>
			<NavBar />
			<hr />
			{ pageData.data.title }
		</div>
	);
};
