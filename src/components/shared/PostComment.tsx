import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Textarea } from '@chakra-ui/textarea';
import { IoSendSharp } from '@components/icons';
import { StackLayout } from '@components/layouts';
import {
	CommentsForIdeaDocument,
	usePostCommentMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import useIdea from '@pages/idea/ideaview/query/ideaQuery';
import React, { useCallback, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { CurrentUserAvatar } from './UserAvatar';

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
		<StackLayout spacing={2} d="flex" flex={1} justifyContent="flex-end">
			<StackLayout
				direction="row"
				spacing={2}
				w="full"
				alignItems="center"
			>
				<CurrentUserAvatar size="sm" />

				<Textarea
					name="value"
					id="value"
					// minH=""
					placeholder="Write your comment here"
					w="full"
					as={ResizeTextarea}
					onChange={onValueChange}
					value={value}
					borderBottomWidth={2}
					borderColor="white"
					maxRows={2}
					resize="none"
					minRows={1}
					minH="fit-content"
					p={2}
					title="Write your comment here"
					_hover={{
						borderColor: 'transparent'
					}}
					_focus={{
						borderColor: 'transparent'
					}}
				/>

				<IconButton
					aria-label="send-message"
					variant="ghost"
					colorScheme="fpPrimary"
					title="Send message"
					type="submit"
					onClick={() => postCommentMutation()}
					visibility={value.length ? 'visible' : 'hidden'}
				>
					<Icon as={IoSendSharp} />
				</IconButton>
			</StackLayout>
		</StackLayout>
	);
};

export default PostComment;
