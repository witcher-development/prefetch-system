import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchTeamsPageData, teamsPageState } from '@teams';


export const useFetchTeamsPageData = () => {
	const [pageData, setPageData] = useRecoilState(teamsPageState);

	useEffect(() => {
		if (pageData.state === 'loaded') return;
		const fetch = async () => {
			setPageData({
				state: 'loading'
			});
			setPageData({
				state: 'loaded',
				data: await fetchTeamsPageData() as { title: string }
			});
		};
		fetch();
	}, []);

	return pageData;
};
