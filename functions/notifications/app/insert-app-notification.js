import { getClient } from 'functions';

const { graphqlClient, gql } = getClient();

const INSERT_NOTIFICATION = gql`
	mutation ($userId: uuid!, $href: String!, $type: String!, $value: String!) {
		insert_user_notifications_one(object: {href: $href, type: $type, user_id: $userId, value: $value}) {
			userId
			href
			type
			value
		}
	}
`;

export default (req, res) => {
	// const followerId = req.body.event.data.new.follower_id;
	// const followingId = req.body.event.data.new.following_id;

	const userId = req.body.event.data.new.user_id;

	console.debug('REQ: ', req);

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
