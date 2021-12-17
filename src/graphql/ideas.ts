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

const GET_USER_IDEAS = gql`
	query getUserIdeas($user_id: uuid!) {
		ideas(
			where: { user_id: { _eq: "de0f34ae-8986-4534-b3b7-60d6ce0babb2" } }
			order_by: { updated_at: desc }
		) {
			name
			description
			field
			updated_at
			is_published
			user_id
			id
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
			idea_votes {
				idea {
					idea_votes_aggregate {
						aggregate {
							sum {
								vote_type
							}
						}
					}
					idea_votes(where: { user_id: { _eq: $userId } }) {
						vote_type
					}
				}
			}
			id
			name
			preview
			field
			status
			created_at
			is_new
			idea_user {
				first_name
				country
				id
				avatar_url
				account {
					email
				}
			}
		}
	}
`;

const GET_IDEA = gql`
	query getIdea($id: uuid!) {
		idea: ideas_by_pk(id: $id) {
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
			created_at
			idea_user {
				avatar_url
				first_name
				country
				id
			}
			idea_votes_aggregate {
				aggregate {
					sum {
						vote_type
					}
				}
			}
		}
	}
`;

const UPSERT_IDEA_UPVOTE = gql`
	mutation upsertIdeaVote($idea_vote: idea_votes_insert_input!) {
		insert_idea_votes_one(
			object: $idea_vote
			on_conflict: {
				constraint: idea_votes_pkey
				update_columns: vote_type
			}
		) {
			idea_id
		}
	}
`;

// const UPVOTE_IDEA = gql`
// 	mutation ($idea_vote: idea_votes_insert_input!) {
// 		insert_idea_votes_one(objects: $idea_vote) {
// 			affected_rows
// 		}
// 	}
// `;

export {
	CREATE_IDEA,
	GET_USER_IDEAS,
	GET_IDEAS,
	GET_IDEA,
	UPDATE_IDEA,
	DELETE_IDEA,
	UPSERT_IDEA_UPVOTE
};
