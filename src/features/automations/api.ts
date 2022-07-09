export const fetchAutomationsPageData = () => (
	new Promise((res) => {
		setTimeout(() => res({
			title: 'automations page'
		}), 1000);
	})
);