import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchAutomationsPageData, automationsPageState } from '@automations';


export const AutomationsPage = () => {
	const [pageState, setPageState] = useRecoilState(automationsPageState);

	useEffect(() => {
		const fetch = async () => {
			setPageState({
				state: 'loading'
			});
			setPageState({
				state: 'loaded',
				data: await fetchAutomationsPageData() as { title: string }
			});
		};
		fetch();
	}, []);

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