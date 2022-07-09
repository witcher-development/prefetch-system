import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchTeamsPageData, teamsPageState } from '@teams';


export const TeamsPage = () => {
	const [pageState, setPageState] = useRecoilState(teamsPageState);

	useEffect(() => {
		const fetch = async () => {
			setPageState({
				state: 'loading'
			});
			setPageState({
				state: 'loaded',
				data: await fetchTeamsPageData() as { title: string }
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