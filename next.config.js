module.exports = {
	rewrites() {
		return {
			beforeFiles: [
				// if the host is `app.founderpad.com`,
				// this rewrite will be applied
				{
					source: '/:path*',
					has: [
						{
							type: 'host',
							value: 'app.founderpad.com'
						}
					],
					destination: '/app/:path*'
				}
			]
		};
	}
};
