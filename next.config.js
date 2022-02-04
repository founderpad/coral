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
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true
			}
			// {
			// 	source: '/login#refreshToken=(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)&type=passwordReset',
			// 	destination: '/changepassword',
			// 	permanent: true
			// }
		];
	},
	async rewrites() {
		return {
			beforeFiles: [
				// {
				// 	source: '/register/registersuccess',
				// 	source: '/register/register_success'
				// }
				// {
				// 	source: '/about',
				// 	destination: '/about-us.html'
				// },
				// {
				// 	source: '/faqs',
				// 	destination: '/faqs.html'
				// },
				// {
				// 	source: '/contact',
				// 	destination: '/contact-us.html'
				// },
				// {
				// 	source: '/privacy-policy',
				// 	destination: '/privacy.html'
				// },
				// {
				// 	source: '/cookie-policy',
				// 	destination: '/cookie-policy.html'
				// },
				// {
				// 	source: '/acceptable-use-policy',
				// 	destination: '/acceptable-use-policy.html'
				// },
				// {
				// 	source: '/terms-of-service',
				// 	destination: '/terms-of-service.html'
				// }
			]
		};
	}
};
