import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchTemplatesPageData, templatesPageState } from '@templates';


export const useFetchTemplatesPageData = () => {
	const [pageData, setPageData] = useRecoilState(templatesPageState);

	useEffect(() => {
		if (pageData.state === 'loaded') return;
		const fetch = async () => {
			setPageData({
				state: 'loading'
			});
			setPageData({
				state: 'loaded',
				data: await fetchTemplatesPageData() as { title: string }
			});
		};
		fetch();
	}, []);

	return pageData;
};
