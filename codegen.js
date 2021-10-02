module.exports = {
	schema: [
		{
			'https://hasura-19728797.nhost.app/v1/graphql': {
				headers: {
					'x-hasura-role': 'user',
					'x-hasura-admin-secret': 'thisissomesecret'
				}
			}
		}
	],
	documents: ['./src/**/*.tsx', './src/**/*.ts'],
	// documents: ['./src/graphql/**/*.graphql'],
	overwrite: true,
	generates: {
		'./src/generated/graphql.tsx': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			],
			config: {
				preResolveTypes: true,
				skipTypename: false,
				withHooks: true,
				withHOC: false,
				withComponent: false,
				enumsAsTypes: true,
				constEnums: true,
				reactApolloVersion: 3
			}
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};
