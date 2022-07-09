import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { NavBar } from '@common/NavBar';
import { fetchHomePageData, homePageState } from '@home';


export const HomePage = () => {
	const [pageData, setPageData] = useRecoilState(homePageState);

	useEffect(() => {
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