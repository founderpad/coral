// module.exports = {
// 	rewrites() {
// 		return {
// 			beforeFiles: [
// 				// if the host is `app.acme.com`,
// 				// this rewrite will be applied
// 				// {
// 				// 	source: '/:path*',
// 				// 	has: [
// 				// 		{
// 				// 			type: 'host',
// 				// 			value: 'app.founderpad.com'
// 				// 		}
// 				// 	],
// 				// 	destination: '/app/:path*'
// 				// }
// 				// {
// 				// 	source: '/',
// 				// 	destination: 'https://founderpad-24c952.webflow.io/'
// 				// }

// 				{
// 					source: '/index',
// 					destination: '/'
// 				}
// 			]
// 		};
// 	}
// };

// module.exports = {
// 	async rewrites() {
// 		return [
// 			{
// 				source: '/',
// 				destination: '/index'
// 			}
// 		];
// 	}
// };

module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: '/',
					destination: '/index.html'
				},
				{
					source: '/about',
					destination: '/about.html'
				},
				{
					source: '/faqs',
					destination: '/faqs.html'
				},
				{
					source: '/contact',
					destination: '/contact'
				},
				{
					source: '/contact',
					destination: '/contact-us.html'
				},
				{
					source: '/privacy-policy',
					destination: '/privacy.html'
				},
				{
					source: '/cookie-policy',
					destination: '/cookie-policy.html'
				},
				{
					source: '/acceptable-use-policy',
					destination: '/acceptable-use-policy.html'
				}
			]
		};
	}
};
