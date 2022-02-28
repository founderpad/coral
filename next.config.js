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
		];
	},
	async rewrites() {
		return [
			{
				source: '/register',
				destination: '/auth/register'
			},
			{
				source: '/login',
				destination: '/auth/login'
			},
			{
				source: '/resetpassword',
				destination: '/auth/resetpassword'
			},
			{
				source: '/changepassword',
				destination: '/auth/changepassword'
			},
			{
				source: '/changepassword',
				destination: '/idea/changepassword'
			},
			{
				source: '/idea/:id',
				destination: '/ideas/idea/:id'
			},
			{
				source: '/user/:id',
				destination: '/users/user/:id'
			}
			// {
			// 	source: '/ideas/search',
			// 	destination: '/idea/search'
			// }
		];
		// return {
		// 	beforeFiles: [
		// 		{
		// 			source: '/auth/register',
		// 			destination: '/register'
		// 		}
		// 		// {
		// 		// 	source: '/register/registersuccess',
		// 		// 	source: '/register/register_success'
		// 		// }
		// 		// {
		// 		// 	source: '/about',
		// 		// 	destination: '/about-us.html'
		// 		// },
		// 		// {
		// 		// 	source: '/faqs',
		// 		// 	destination: '/faqs.html'
		// 		// },
		// 		// {
		// 		// 	source: '/contact',
		// 		// 	destination: '/contact-us.html'
		// 		// },
		// 		// {
		// 		// 	source: '/privacy-policy',
		// 		// 	destination: '/privacy.html'
		// 		// },
		// 		// {
		// 		// 	source: '/cookie-policy',
		// 		// 	destination: '/cookie-policy.html'
		// 		// },
		// 		// {
		// 		// 	source: '/acceptable-use-policy',
		// 		// 	destination: '/acceptable-use-policy.html'
		// 		// },
		// 		// {
		// 		// 	source: '/terms-of-service',
		// 		// 	destination: '/terms-of-service.html'
		// 		// }
		// 	]
		// };
	}
};
