import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Textarea } from '@chakra-ui/textarea';
import { IoSendSharp } from '@components/icons';
import { StackLayout } from '@components/layouts';
import IdeaContext from '@context/idea/IdeaContext';
import {
	CommentsForIdeaDocument,
	usePostCommentMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import React, { useCallback, useContext, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { CurrentUserAvatar } from './UserAvatar';

const PostComment = () => {
	const [value, setValue] = useState('');
	const user = useCurrentUser();

	const data = useContext(IdeaContext).data;

	const [postCommentMutation] = usePostCommentMutation({
		variables: {
			ideaComment: {
				ideaId: data?.idea?.id,
				targetUserId: data?.idea?.userId,
				value
			},
			ideaId: data?.idea?.id
		},
		// update(cache, mutationResult) {
		// 	cache.modify({
		// 		fields: {
		// 			idea_comments: (previous, { toReference }) => {
		// 				const result = [
		// 					...previous,
		// 					toReference(mutationResult.data.addIdeaComment)
		// 				];
		// 			}
		// 		}
		// 	});
		// },
		refetchQueries: [
			{
				query: CommentsForIdeaDocument,
				variables: {
					ideaId: data?.idea?.id
				}
			}
		],
		onCompleted: () => {
			event({
				action: 'Post comment',
				params: {
					comment: value,
					idea_id: data?.idea?.id,
					to_user_id: data?.idea?.userId,
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
		[value]
	);

	return (
		<StackLayout spacing={2} d={'flex'} justifyContent={'flex-end'}>
			<StackLayout
				direction={'row'}
				spacing={2}
				w={'full'}
				alignItems={'center'}
			>
				<CurrentUserAvatar size={'sm'} />

				<Textarea
					name={'value'}
					id={'value'}
					minH={'unset'}
					placeholder={'Write your comment here'}
					w={'full'}
					as={ResizeTextarea}
					onChange={onValueChange}
					value={value}
					borderBottomWidth={2}
					borderColor={'white'}
					maxRows={3}
					resize={'none'}
					maxH={'100px'}
					p={2}
					title={'Write your comment here'}
					_hover={{
						borderColor: 'transparent'
					}}
					_focus={{
						borderColor: 'transparent'
					}}
				/>

				<IconButton
					aria-label={'send-message'}
					variant={'ghost'}
					colorScheme={'fpPrimary'}
					title={'Send message'}
					type={'submit'}
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
