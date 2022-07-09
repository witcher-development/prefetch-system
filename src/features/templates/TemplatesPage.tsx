import React from 'react';

import { NavBar } from '@common/NavBar';
import { useFetchTemplatesPageData } from '@templates';


export const TemplatesPage = () => {
	const pageState = useFetchTemplatesPageData();

	if (pageState.state === 'not_loaded') {
		return <>havent started loading yet</>;
	}

	if (pageState.state !== 'loaded') {
		return <>loading</>;
	}

	return (
		<div>
			<NavBar />
			<hr />
			{ pageState.data.title }
		</div>
	);
};
