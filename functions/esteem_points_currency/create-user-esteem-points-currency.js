import { getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

const CREATE_ESTEEM_POINTS_AND_CURRENCY = gql`
	mutation ($userId: uuid!) {
		insert_user_esteem_points_currency_one(object: { userId: $userId }) {
			userId
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const userId = req.body.event.data.new.id;

	if (!userId) throw 'No user id found ';

	try {
		const response = await graphqlClient.request(
			CREATE_ESTEEM_POINTS_AND_CURRENCY,
			{
				userId
			}
		);
		res.status(200).send('Esteem points and currency created for user');
	} catch (error) {
		// throw `Failed to insert esteem points for user with id: ${userId}`;
		res.status(500).send(
			error.message +
				' --- Failed to create esteem points and currency for user'
		);
	}
};
