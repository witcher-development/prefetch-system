export const fetchDocumentsPageData = () => (
	new Promise((res) => {
		console.log("documents request");
		setTimeout(() => res({
			title: 'documents page'
		}), 1000);
	})
);
