import { getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

const ADD_ESTEEM_POINTS = gql`
	mutation ($userId: uuid!) {
		update_esteem_points_by_pk(
			pk_columns: { userId: $userId }
			_inc: { points: 10 }
		) {
			userId
			points
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const userId = req.body.event.data.new.user_id;
	const targetUserId = req.body.event.data.new.target_user_id;

	if (!userId) throw 'No user id found';
	if (targetUserId === userId) return null;

	try {
		const response = await graphqlClient.request(ADD_ESTEEM_POINTS, {
			userId
		});
		res.status(200).send('Esteem points added for user');
	} catch (error) {
		// throw `Failed to insert esteem points for user with id: ${userId}`;
		res.status(500).send(
			error.message + ' --- Failed to add esteem points for user'
		);
	}
};
