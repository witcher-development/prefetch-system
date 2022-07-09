import React, { useEffect } from 'react';

import { useFetchHomePageData } from '@home';
import { useFetchDocumentsPageData } from '@documents';
import { useFetchTemplatesPageData } from '@templates';
import { useFetchAutomationsPageData } from '@automations';
import { useFetchTeamsPageData } from '@teams';

import { networkActivity } from './networkTracker';


const priority = [
	useFetchHomePageData,
	useFetchDocumentsPageData,
	useFetchTemplatesPageData,
	useFetchAutomationsPageData,
	useFetchTeamsPageData
];

const prefetch = async (currentIndex = 0) => {
	if (currentIndex > priority.length) return;
	if (networkActivity.isNetworkFree()) {
		console.log('running priority: ', currentIndex);
		priority[currentIndex]();
		prefetch(currentIndex++);
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
