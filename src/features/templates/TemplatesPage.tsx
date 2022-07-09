import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { NavBar } from '@common/NavBar';
import { fetchTemplatesPageData, templatesPageState } from '@templates';


export const TemplatesPage = () => {
	const [pageState, setPageState] = useRecoilState(templatesPageState);

	useEffect(() => {
		const fetch = async () => {
			setPageState({
				state: 'loading'
			});
			setPageState({
				state: 'loaded',
				data: await fetchTemplatesPageData() as { title: string }
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
			<NavBar />
			<hr />
			{ pageState.data.title }
		</div>
	);
};