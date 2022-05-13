import { addEsteemPoints, getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

const ADD_ESTEEM_POINTS = gql`
	mutation ($userId: uuid!) {
		update_esteem_points_by_pk(
			pk_columns: { userId: $userId }
			_inc: { points: 50 }
		) {
			userId
			points
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const userId = req.body.event.data.new.user_id;

	if (!userId) throw 'No user id found';

	try {
		const response = await graphqlClient.request(ADD_ESTEEM_POINTS, {
			userId
		});
		res.status(200).send(`Esteem points added for ${userId}`);
	} catch (error) {
		res.status(500).send(
			error.message +
				` --- Failed to add esteem points for idea created by user id: ${userId}`
		);
	}
};
