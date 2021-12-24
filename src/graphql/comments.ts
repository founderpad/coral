import gql from 'graphql-tag';

const POST_COMMENT_FOR_IDEA = gql`
	mutation postComment($ideaComment: idea_comments_insert_input!) {
		addIdeaComment: insert_idea_comments_one(object: $ideaComment) {
			idea_id
			id
			value
		}
	}
`;

const POST_REPLY_FOR_IDEA = gql`
	mutation postReply($ideaReply: idea_comment_replies_insert_input!) {
		addIdeaReply: insert_idea_comment_replies_one(object: $ideaReply) {
			comment_id
			id
			value
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
	query getRepliesForComment($commentId: uuid!) {
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
	POST_COMMENT_FOR_IDEA,
	POST_REPLY_FOR_IDEA,
	GET_COMMENTS_FOR_IDEA,
	GET_REPLIES_FOR_COMMENT
};
