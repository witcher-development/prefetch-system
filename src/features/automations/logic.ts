import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchAutomationsPageData, automationsPageState } from '@automations';


export const useFetchAutomationsPageData = () => {
	const [pageData, setPageData] = useRecoilState(automationsPageState);

	useEffect(() => {
		if (pageData.state === 'loaded') return;
		const fetch = async () => {
			setPageData({
				state: 'loading'
			});
			setPageData({
				state: 'loaded',
				data: await fetchAutomationsPageData() as { title: string }
			});
		};
		fetch();
	}, []);

	return pageData;
};
