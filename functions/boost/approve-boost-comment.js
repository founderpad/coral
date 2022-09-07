import { addEsteemPoints, getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

const ADD_CURRENCY = gql`
	mutation ($userId: uuid!) {
		update_user_esteem_points_currency_by_pk(
			pk_columns: { userId: $userId }
			_inc: { currency: "0.05" }
		) {
			points
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const isBoost = req.body.event.data.new.is_boost;
	const oldStatus = req.body.event.data.old.status;
	const newStatus = req.body.event.data.new.status;
	const userId = req.body.event.data.new.user_id;

	if (!userId) throw 'No user id found';

	if (isBoost && newStatus === 'APPROVED' && oldStatus === 'PENDING') {
		try {
			const response = await graphqlClient.request(ADD_CURRENCY, {
				userId
			});
			res.status(200).send(`Currency added for ${userId}`);
		} catch (error) {
			res.status(500).send(
				error.message +
					` --- Failed to add currency for user id: ${userId}`
			);
		}
	}

	res.status(200).send('Not a boosted comment so nothing to do.');
};
