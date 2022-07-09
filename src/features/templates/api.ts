export const fetchTemplatesPageData = () => (
	new Promise((res) => {
		setTimeout(() => res({
			title: 'templates page'
		}), 1000);
	})
);