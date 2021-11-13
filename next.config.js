module.exports = {
	rewrites() {
		return {
			beforeFiles: [
				// if the host is `app.acme.com`,
				// this rewrite will be applied
				// {
				// 	source: '/:path*',
				// 	has: [
				// 		{
				// 			type: 'host',
				// 			value: 'app.founderpad.com'
				// 		}
				// 	],
				// 	destination: '/app/:path*'
				// }
				// {
				// 	source: '/',
				// 	destination: 'https://founderpad-24c952.webflow.io/'
				// }
			]
		};
	}
};
