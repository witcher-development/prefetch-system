export const fetchHomePageData = () => (
	new Promise((res) => {
		setTimeout(() => res({
			title: 'home page'
		}), 1000);
	})
);