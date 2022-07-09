import React from 'react';

import { useFetchTeamsPageData } from '@teams';


export const TeamsPage = () => {
	const pageState = useFetchTeamsPageData();

	if (pageState.state === 'not_loaded') {
		return <>havent started loading yet</>;
	}

	if (pageState.state !== 'loaded') {
		return <>loading</>;
	}

	return (
		<div>
			{ pageState.data.title }
		</div>
	);
};
