import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchHomePageData, homePageState } from '@home';


export const useFetchHomePageData = () => {
	const [pageData, setPageData] = useRecoilState(homePageState);

	useEffect(() => {
		if (pageData.state === 'loaded') return;
		const fetch = async () => {
			setPageData({
				state: 'loading'
			});
			setPageData({
				state: 'loaded',
				data: await fetchHomePageData() as { title: string }
			});
		};
		fetch();
	}, []);

	return pageData;
};
