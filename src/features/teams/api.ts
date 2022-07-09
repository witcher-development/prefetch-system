export const fetchTeamsPageData = () => (
	new Promise((res) => {
		setTimeout(() => res({
			title: 'teams page'
		}), 1000);
	})
);