const { alias } = require('react-app-rewire-alias');


module.exports = function override (config) {
	alias({
		'@common': 'src/features/common',
		'@prefetch': 'src/features/prefetch/index.ts',
		'@home': 'src/features/home',
		'@documents': 'src/features/documents',
		'@templates': 'src/features/templates',
		'@automations': 'src/features/automations',
		'@teams': 'src/features/teams',
		'@router': 'src/router',
		'@store': 'src/store',
		'@env': 'src/env.ts',
		'@utils': 'src/utils',
	})(config);

	return config;
};
