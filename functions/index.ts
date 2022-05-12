import dotevn from 'dotenv';
dotevn.config();

const { GraphQLClient, gql } = require('graphql-request');

const ADD_ESTEEM_POINTS = gql`
	mutation ($userId: uuid!, $points: number!) {
		update_esteem_points_by_pk(
			pk_columns: { userId: $userId }
			_inc: { points: $points }
		) {
			userId
			points
		}
	}
`;

export function getClient() {
	const graphqlClient = new GraphQLClient(
		process.env.NHOST_BACKEND_URL + '/v1/graphql',
		{
			headers: {
				['x-hasura-admin-secret']: process.env.NHOST_ADMIN_SECRET
			}
		}
	);

	return { graphqlClient, gql };
}

export async function isValidSecret(req: any) {
	try {
		if (
			req.headers['x-hasura-admin-secret'] !==
			process.env.NHOST_ADMIN_SECRET
		) {
			throw 'Invalid secret';
		}
	} catch (error) {
		throw 'Invalid secret';
	}
}

export async function addEsteemPoints(userId: string, points: number) {
	const { graphqlClient } = getClient();

	try {
		await graphqlClient.request(ADD_ESTEEM_POINTS, {
			userId,
			points
		});
	} catch (error) {
		throw `Failed to add esteem points for user ${userId}`;
	}
}
