import gql from 'graphql-tag';

const GET_USER_ACTIVITY = gql`
	query getUserActivities($user_id: uuid!) {
		activity(where: { user_id: { _eq: $user_id } }) {
			idea_id
			event
			description
			url
			type
			created_at
		}
	}
`;

export { GET_USER_ACTIVITY };
