import React, { useEffect,  } from 'react';

import { fetchHomePageData } from '@home';
import { fetchDocumentsPageData } from '@documents';
import { useFetchTemplatesPageData } from '@templates';
import { useFetchAutomationsPageData } from '@automations';
import { useFetchTeamsPageData } from '@teams';

import { networkActivity } from './networkTracker';


const priority = [
	fetchHomePageData,
	fetchDocumentsPageData,
	// useFetchTemplatesPageData,
	// useFetchAutomationsPageData,
	// useFetchTeamsPageData
];

const prefetch = async (currentIndex = 0) => {
	if (currentIndex >= priority.length) return;
	if (networkActivity.isNetworkFree()) {
		console.log('running priority: ', currentIndex);
		priority[currentIndex]();
		prefetch(currentIndex + 1);
	} else {
		console.log('stuck on priority: ', currentIndex);
		await new Promise((r) => setTimeout(r, 500));
		prefetch(currentIndex);
	}
};

export const Prefetch = () => {
	console.log('Prefetch render');
	useEffect(() => {
		prefetch();
	}, []);
	return <></>;
};
