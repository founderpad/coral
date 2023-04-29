import { addEsteemPoints, getClient, isValidSecret } from '..';

const { graphqlClient, gql } = getClient();

const INSERT_BOOSTED_IDEA = gql`
	mutation ($ideaId: uuid!) {
		insert_boosted_ideas_one(object: { ideaId: $ideaId }) {
			ideaId
		}
	}
`;

export default async (req, res) => {
	// isValidSecret(req);
	const ideaId = res?.req?.body?.resource?.custom_id;
	// if (!userId) throw 'No user id found';

	if (ideaId) {
		try {
			const response = await graphqlClient.request(INSERT_BOOSTED_IDEA, {
				ideaId
			});
			res.status(200).send(`Idea with id ${ideaId} added to boost`);
		} catch (error) {
			// throw `Failed to insert esteem points for user with id: ${userId}`;
			res.status(500).send(
				error.message + ' --- Failed to create esteem points for user'
			);
		}
	}

	return null;
};
