import axios from 'axios';

import { HomePageData } from './store';


export const fetchHomePageData = async () => {
	await new Promise((r) => setTimeout(r, 1500));

	const response = await axios.get('', {
		data: 'home page'
	});
	return { title: response.data } as HomePageData;
};
