import {
	CommentsForIdeaDocument,
	usePostCommentMutation
} from '@generated/api';
import { useAuth } from '@hooks/auth';
import { useSuccessNotification } from '@hooks/toast';
import { event } from '@lib/ga';
import useIdea from '@pages/ideas/idea/query/ideaQuery';
import { addEsteemPoints } from '@slices/auth';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import WriteInput from './WriteInput';

const PostComment = () => {
	const [value, setValue] = useState('');
	const user = useAuth().user;
	const dispatch = useDispatch();
	const showNotification = useSuccessNotification();

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
		update(cache, mutationResult) {
			cache.modify({
				fields: {
					idea_comments: (previous, { toReference }) => {
						return [
							...previous,
							toReference(mutationResult.data?.addIdeaComment!)
						];
					}
					// users
					// ideas: (previous) => {
					// 	console.log('previous: ', previous);
					// 	return {
					// 		...previous,
					// 		totalComments: previous.totalComments + 1
					// 	};
					// }
				}
			});
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
					from_user_id: user?.id,
					from_user_display_name: user?.displayName,
					from_user_email: user?.email
				}
			});

			setValue('');

			// cache.writeFragment({
			// 	id: `users:${user.id}`,
			// 	fragment: gql`
			// 		fragment AddPoints on users {
			// 			esteemPoints {
			// 				points
			// 			}
			// 		}
			// 	`,
			// 	data: {
			// 		esteemPoints: {
			// 			points: user.esteemPoints?.points! + 10
			// 		}
			// 	}
			// });

			if (user?.id !== idea?.userId) {
				dispatch(addEsteemPoints(10));
				showNotification({
					title: '+10 Esteem Points',
					description: 'You have earned 10 Esteem Points'
				});
			}
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
