import gql from 'graphql-tag';

const CREATE_IDEA = gql`
	mutation createIdea($idea: ideas_insert_input!) {
		idea: insert_ideas_one(object: $idea) {
			id
		}
	}
`;

const UPDATE_IDEA = gql`
	mutation updateIdea($idea: ideas_set_input!, $id: uuid!) {
		update_ideas_by_pk(pk_columns: { id: $id }, _set: $idea) {
			id
			name
			description
			field
			mission_statement
			competitors
			team
			additional_information
			is_published
			user_id
			status
		}
	}
`;

const DELETE_IDEA = gql`
	mutation deleteIdea($id: uuid!) {
		delete_ideas_by_pk(id: $id) {
			id
		}
	}
`;

const INSERT_INTERESTED_IDEA = gql`
	mutation insertInterestedIdea($ideaId: uuid!) {
		insert_interested_ideas_one(object: { idea_id: $ideaId }) {
			idea_id
		}
		update_ideas_by_pk(
			pk_columns: { id: $ideaId }
			_inc: { number_of_interested: 1 }
		) {
			id
		}
	}
`;

// const GET_IDEAS = gql`
// 	subscription getIdeas {
// 		ideas(
// 			order_by: { updated_at: desc }
// 			where: { is_published: { _eq: true } }
// 		) {
// 			id
// 			name
// 			description
// 			category
// 			user_id
// 			is_published
// 			created_at
// 		}
// 	}
// `;

const GET_IDEAS = gql`
	query getIdeas(
		$where: idea_preview_bool_exp
		$limit: Int
		$offset: Int
		$orderBy: [idea_preview_order_by!]
		$userId: uuid!
	) {
		idea_preview_aggregate(where: $where) {
			aggregate {
				count
			}
		}
		idea_preview(
			where: $where
			limit: $limit
			offset: $offset
			order_by: $orderBy
		) {
			id
			name
			preview
			field
			status
			createdAt
			isNew
			totalInterest
			totalComments
			idea_user {
				first_name
				country
				id
				avatar_url
				account {
					email
				}
			}
			idea_votes_aggregate {
				aggregate {
					count(columns: id)
				}
			}
			idea_votes(where: { user_id: { _eq: $userId } }) {
				id
			}
		}
	}
`;

const GET_USER_IDEAS = gql`
	query getUserIdeas($userId: uuid!) {
		user_ideas: ideas(
			where: { user_id: { _eq: $userId } }
			order_by: { created_at: desc }
		) {
			id
			name
			created_at
			is_published
			number_of_interested
			number_of_upvotes
			number_of_comments
		}
	}
`;

const GET_IDEA = gql`
	query getIdea($id: uuid!, $userId: uuid!) {
		idea: ideas_by_pk(id: $id) {
			id
			name
			description
			field
			competitors
			team
			additional_information
			is_published
			user_id
			status
			created_at
			number_of_interested
			number_of_comments
			number_of_upvotes
			idea_user {
				avatar_url
				first_name
				country
				id
			}
			idea_votes_aggregate {
				aggregate {
					count(columns: id)
				}
			}
		}
		has_interest: interested_ideas_by_pk(idea_id: $id, user_id: $userId) {
			id
		}
	}
`;

// const UPSERT_IDEA_UPVOTE = gql`
// 	mutation upsertIdeaVote($idea_vote: idea_votes_insert_input!) {
// 		insert_idea_votes_one(
// 			object: $idea_vote
// 			on_conflict: {
// 				constraint: idea_votes_pkey
// 				update_columns: vote_type
// 			}
// 		) {
// 			idea_id
// 		}
// 	}
// `;

const GET_IDEA_INTERESTED_USERS = gql`
	query getIdeaInterestedUsers($ideaId: uuid!) {
		interested_users: interested_ideas(
			where: { idea_id: { _eq: $ideaId } }
			order_by: { created_at: desc }
		) {
			id
			created_at
			user {
				display_name
				avatar_url
				account {
					email
				}
			}
		}
	}
`;

const INSERT_IDEA_UPVOTE = gql`
	mutation insertIdeaUpvote($idea_vote: idea_votes_insert_input!) {
		insert_idea_votes_one(object: $idea_vote) {
			id
			idea_id
		}
	}
`;

const DELETE_IDEA_UPVOTE = gql`
	mutation deleteIdeaUpvote($idea_id: uuid!, $user_id: uuid!) {
		delete_idea_votes(
			where: { user_id: { _eq: $user_id }, idea_id: { _eq: $idea_id } }
		) {
			affected_rows
		}
	}
`;

export {
	CREATE_IDEA,
	GET_USER_IDEAS,
	GET_IDEAS,
	GET_IDEA,
	UPDATE_IDEA,
	DELETE_IDEA,
	// UPSERT_IDEA_UPVOTE,
	INSERT_INTERESTED_IDEA,
	GET_IDEA_INTERESTED_USERS,
	INSERT_IDEA_UPVOTE,
	DELETE_IDEA_UPVOTE
};
