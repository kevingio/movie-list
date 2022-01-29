const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@helpers': path.resolve(__dirname, 'src/helpers'),
			'@contexts': path.resolve(__dirname, 'src/contexts'),
			'@constants': path.resolve(__dirname, 'src/constants'),
		}
	},
};