import gql from 'graphql-tag';

const POST_COMMENT = gql`
	mutation postComment($comment: idea_comments_insert_input!) {
		idea: insert_idea_comments_one(object: $comment) {
			idea_id
			id
		}
	}
`;

const POST_REPLY = gql`
	mutation postReply($reply: idea_comment_replies_insert_input!) {
		idea: insert_idea_comment_replies_one(object: $reply) {
			comment_id
			id
		}
	}
`;

const GET_COMMENTS_FOR_IDEA = gql`
	query getCommentsForIdea($ideaId: uuid!) {
		comments: idea_comments(
			where: { idea_id: { _eq: $ideaId } }
			order_by: { updated_at: desc }
		) {
			id
			updated_at
			value
			idea_id
			user {
				id
				first_name
				avatar_url
				account {
					email
				}
			}
		}
	}
`;

const GET_REPLIES_FOR_COMMENT = gql`
	subscription getRepliesForComment($commentId: uuid!) {
		replies: idea_comment_replies(
			where: { comment_id: { _eq: $commentId } }
			order_by: { updated_at: asc }
		) {
			id
			comment_id
			value
			updated_at
			user {
				id
				first_name
				avatar_url
				account {
					email
				}
			}
		}
	}
`;

export {
	POST_COMMENT,
	POST_REPLY,
	GET_COMMENTS_FOR_IDEA,
	GET_REPLIES_FOR_COMMENT
};
