import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { NavBar } from '@common/NavBar';
import { fetchDocumentsPageData, documentsPageState } from '@documents';


export const DocumentsPage = () => {
	const [pageData, setPageData] = useRecoilState(documentsPageState);

	useEffect(() => {
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

	if (pageData.state === 'not_loaded') {
		return <>havent started loading yet</>;
	}

	if (pageData.state !== 'loaded') {
		return <>loading</>;
	}

	return (
		<div>
			<NavBar />
			<hr />
			{ pageData.data.title }
		</div>
	);
};