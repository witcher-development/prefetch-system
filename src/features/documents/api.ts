import axios from 'axios';

import { DocumentsPageData } from './store';


export const fetchDocumentsPageData = async () => {
	await new Promise((r) => setTimeout(r, 1500));

	const response = await axios.get('', {
		data: 'documents page'
	});
	return { title: response.data } as DocumentsPageData;
};
