import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { NavBar } from '@common/NavBar';

import { useFetchHomePageData } from './logic';


export const HomePage = () => {
	useFetchHomePageData();
	const pageData = useSelector((state: RootState) => state.homePageState);

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
