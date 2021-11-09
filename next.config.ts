// interface Props {
//     source: String;
//     has: Mapping[];
// 	destination: String;
// }

// interface Mapping {
//     type: String;
//     value: String;
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function rewrites() {
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
