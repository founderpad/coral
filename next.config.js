const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// module.exports = withBundleAnalyzer(
// 	withPWA({
// 		pwa: {
// 			dest: 'public',
// 			runtimeCaching
// 		},
// 		poweredByHeader: false,
// 		i18n: {
// 			locales: ['en'],
// 			defaultLocale: 'en'
// 		},
// 		images: {
// 			domains: ['founderpad-file-uploads.s3.eu-west-1.amazonaws.com']
// 		},
// 		async redirects() {
// 			return [
// 				{
// 					source: '/',
// 					destination: '/login',
// 					permanent: true
// 				}
// 			];
// 		},
// 		async rewrites() {
// 			return [
// 				{
// 					source: '/register',
// 					destination: '/auth/register'
// 				},
// 				{
// 					source: '/register/registersuccess',
// 					destination: '/auth/register/registersuccess'
// 				},
// 				{
// 					source: '/login',
// 					destination: '/auth/login'
// 				},
// 				{
// 					source: '/loggedout',
// 					destination: '/auth/loggedout'
// 				},
// 				{
// 					source: '/resetpassword',
// 					destination: '/auth/resetpassword'
// 				},
// 				{
// 					source: '/changepassword',
// 					destination: '/auth/changepassword'
// 				},
// 				{
// 					source: '/changepassword',
// 					destination: '/idea/changepassword'
// 				},
// 				{
// 					source: '/idea/:id',
// 					destination: '/ideas/idea/:id'
// 				},
// 				{
// 					source: '/user/:id',
// 					destination: '/users/user/:id'
// 				},
// 				{
// 					source: '/messages',
// 					destination: '/message'
// 				}
// 			];
// 		}
// 	})
// );

module.exports = withBundleAnalyzer({
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	images: {
		domains: ['founderpad-file-uploads.s3.eu-west-1.amazonaws.com']
	},
	pageExtensions: ['page.tsx', 'ts', 'page.jsx', 'page.js'],
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
				source: '/register/registersuccess',
				destination: '/auth/register/registersuccess'
			},
			{
				source: '/login',
				destination: '/auth/login'
			},
			{
				source: '/loggedout',
				destination: '/auth/loggedout'
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
			},
			{
				source: '/messages',
				destination: '/message'
			}
		];
	}
});
