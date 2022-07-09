import React from 'react';

import { useFetchAutomationsPageData } from '@automations';


export const AutomationsPage = () => {
	const pageState = useFetchAutomationsPageData();

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
