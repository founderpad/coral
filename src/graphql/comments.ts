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
	mutation postReply($reply: idea_replies_insert_input!) {
		idea: insert_idea_replies_one(object: $reply) {
			comment_id
			id
		}
	}
`;

const GET_COMMENTS_FOR_IDEA = gql`
	query getCommentsForIdea($ideaId: uuid!) {
		comments: idea_comments(where: { idea_id: { _eq: $ideaId } }) {
			id
			updated_at
			value
			idea_id
			user {
				display_name
				avatar_url
				id
			}
		}
	}
`;

// const GET_REPLIES_FOR_COMMENT = gql`
// 	query getRepliesForComment($commentId: uuid!) {
// 		replies: comment_replies(where: { comment_id: { _eq: $commentId } }) {
// 			idea_replies {
// 				id
// 				comment_id
// 				value
// 				updated_at
// 				user {
// 					display_name
// 					avatar_url
// 				}
// 			}
// 		}
// 	}
// `;

export {
	POST_COMMENT,
	POST_REPLY,
	GET_COMMENTS_FOR_IDEA
	// GET_REPLIES_FOR_COMMENT
};
