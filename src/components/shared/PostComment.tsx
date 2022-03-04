import {
	CommentsForIdeaDocument,
	usePostCommentMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import useIdea from '@pages/ideas/idea/query/ideaQuery';
import React, { useCallback, useState } from 'react';
import WriteInput from './WriteInput';

const PostComment = () => {
	const [value, setValue] = useState('');
	const user = useCurrentUser();

	const { idea } = useIdea() ?? {};

	const [postCommentMutation] = usePostCommentMutation({
		variables: {
			ideaComment: {
				ideaId: idea?.id,
				targetUserId: idea?.userId,
				value
			},
			ideaId: idea?.id
		},
		// update(cache, mutationResult) {
		// 	cache.modify({
		// 		fields: {
		// 			idea_comments: (previous, { toReference }) => {
		// 				return [
		// 					...previous,
		// 					toReference(mutationResult.data?.addIdeaComment!)
		// 				];
		// 			}
		// 		}
		// 	});
		// },
		refetchQueries: [
			{
				query: CommentsForIdeaDocument,
				variables: {
					ideaId: idea?.id
				}
			}
		],
		onCompleted: () => {
			event({
				action: 'Post comment',
				params: {
					comment: value,
					idea_id: idea?.id,
					to_user_id: idea?.userId,
					from_user_id: user.id,
					from_user_display_name: user.displayName,
					from_user_email: user.email
				}
			});

			setValue('');
		}
	});

	const onValueChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setValue(e.target.value);
		},
		[]
	);

	return (
		<WriteInput
			onChange={onValueChange}
			value={value}
			onClick={() => postCommentMutation()}
		/>
	);
};

export default PostComment;
