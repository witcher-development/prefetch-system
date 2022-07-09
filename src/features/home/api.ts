import axios from 'axios';


export const fetchHomePageData = async () => {
	await new Promise((r) => setTimeout(r, 1500));

	const response = await axios.get('', {
		data: 'home page'
	});
	return response.data;
};
