import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { fetchDocumentsPageData, documentsPageState } from '@documents';


export const useFetchDocumentsPageData = () => {
	const [pageData, setPageData] = useRecoilState(documentsPageState);

	useEffect(() => {
		if (pageData.state === 'loaded') return;
		const fetch = async () => {
			setPageData({
				state: 'loading'
			});
			setPageData({
				state: 'loaded',
				data: await fetchDocumentsPageData() as { title: string }
			});
		};
		fetch();
	}, []);

	return pageData;
};
