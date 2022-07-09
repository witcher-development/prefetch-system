import React  from 'react';

import { NavBar } from '@common/NavBar';

import { useFetchHomePageData } from './logic';


export const HomePage = () => {
	const pageData = useFetchHomePageData();

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
