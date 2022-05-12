import { addEsteemPoints, getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

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

export default async (req, res) => {
	// isValidSecret(req);
	const userId = req.body.event.data.new.user_id;

	if (!userId) throw 'No user id found';

	try {
		await addEsteemPoints(userId, 20);
		res.status(200).send(`Esteem points added for ${userId}`);
	} catch (error) {
		throw 'idea/new.js: Failed to add esteem points';
	}

	res.status(200).send('OK');

	// try {
	// 	await graphqlClient.request(ADD_ESTEEM_POINTS, {
	// 		userId,
	// 		points
	// 	});

	// 	res.status(200).send(`Esteem points added for ${userId}`);
	// } catch (error) {
	// 	res.status(500).send(
	// 		`Failed to add esteem points for new idea from user: ${userId}`
	// 	);
	// 	throw `Failed to add esteem points for new idea from user: ${userId}}`;
	// }
};
