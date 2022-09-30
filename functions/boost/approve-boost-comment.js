import { addEsteemPoints, getClient, isValidSecret } from 'functions';

const { graphqlClient, gql } = getClient();

const ADD_CURRENCY = gql`
	mutation ($userId: uuid!) {
		update_user_esteem_points_currency_by_pk(
			pk_columns: { userId: $userId }
			_inc: { currency: "0.4" }
		) {
			userId
			currency
		}
	}
`;

const UPDATE_CURRENCY_FOR_BOOSTED_IDEA = gql`
	mutation ($ideaId: uuid!) {
		update_boosted_ideas_by_pk(
			pk_columns: { ideaId: $ideaId }
			_inc: { remainingCurrencyAmount: "-0.4" }
		) {
			id
			remainingCurrencyAmount
		}
	}
`;

const FIND_BOOSTED_IDEA = gql`
	query ($ideaId: uuid!) {
		boostedIdea: boosted_ideas_by_pk(ideaId: $ideaId) {
			id
			remainingCurrencyAmount
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const isBoost = req.body.event.data.new.is_boost;
	const oldStatus = req.body.event.data.old.status;
	const newStatus = req.body.event.data.new.status;
	const userId = req.body.event.data.new.user_id;
	const ideaId = req.body.event.data.new.idea_id;
	const targetUserId = req.body.event.data.new.target_user_id;

	if (!userId) throw 'No user id found';
	// if (userId == targetUserId)
	// 	throw 'You can not post boosted feedback to your own idea.';

	if (isBoost && newStatus === 'APPROVED' && oldStatus === 'PENDING') {
		try {
			const boostedIdeaResponse = await graphqlClient.request(
				FIND_BOOSTED_IDEA,
				{
					ideaId
				}
			);

			const hasCurrencyAmountLeft =
				parseFloat(
					boostedIdeaResponse?.boostedIdea?.remainingCurrencyAmount?.substring(
						1
					)
				) > 0;

			if (hasCurrencyAmountLeft) {
				const currencyResponse = await graphqlClient.request(
					ADD_CURRENCY,
					{
						userId
					}
				);

				await graphqlClient.request(UPDATE_CURRENCY_FOR_BOOSTED_IDEA, {
					ideaId
				});
				res.status(200).send(
					`Currency added for user with id: ${userId}, for idea: ${ideaId}`
				);
			} else {
				res.status(200).send(
					`The money for this boosted has already been earned by users.`
				);
			}
		} catch (error) {
			res.status(500).send(
				error.message +
					` --- Failed to add currency for user id: ${userId}, for idea: ${ideaId}`
			);
		}
	} else {
		res.status(200).send('Not a boosted comment so nothing to do.');
	}
};
