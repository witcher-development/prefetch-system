export const fetchDocumentsPageData = () => (
	new Promise((res) => {
		setTimeout(() => res({
			title: 'documents page'
		}), 1000);
	})
);