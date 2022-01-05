import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Textarea } from '@chakra-ui/textarea';
import { IoSendSharp } from 'components/icons';
import { StackLayout } from 'components/layouts';
import IdeaContext from 'context/idea/IdeaContext';
import { usePostCommentMutation } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import * as ga from 'lib/ga';
import React, { useCallback, useContext, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import { CurrentUserAvatar } from './UserAvatar';

const PostComment = (): JSX.Element => {
	const [value, setValue] = useState('');
	// const idea = useIdeaFragment();
	const {
		id: auth_id,
		display_name,
		account: { email }
	} = useCurrentUser();
	// const { id, user_id } = idea ?? {};

	const { data } = useContext(IdeaContext);
	// const { setModalDrawer } = useContext(ModalDrawerContext);

	const [postCommentMutation] = usePostCommentMutation({
		variables: {
			ideaComment: {
				idea_id: data.idea.id,
				target_user_id: data.idea.user_id,
				value
			}
		},
		update(cache, mutationResult) {
			cache.modify({
				fields: {
					idea_comments: (previous, { toReference }) => {
						const result = [
							...previous,
							toReference(mutationResult.data.addIdeaComment)
						];
					}
				}
			});
		},
		// refetchQueries: [
		// 	{
		// 		query: CommentsForIdeaDocument,
		// 		variables: {
		// 			ideaId: useIdeaFragment().id
		// 		}
		// 	}
		// ],
		onCompleted: () => {
			ga.event({
				action: 'Post comment',
				params: {
					comment: value,
					idea_id: data.idea.id,
					to_user_id: data.idea.user_id,
					from_user_id: auth_id,
					from_user_display_name: display_name,
					from_user_email: email
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

	// const onClick = () => {
	// 	reset({
	// 		value: ''
	// 	});
	// 	setModalDrawer({
	// 		title: 'Post your comment',
	// 		isOpen: true,
	// 		body: (
	// 			<Form
	// 				id={'postCommentForm'}
	// 				name={'postCommentForm'}
	// 				onSubmit={handleSubmit(postCommentMutation)}
	// 				isSubmitting={isSubmitting}
	// 				isValid={isValid}
	// 			>
	// 				<TextareaField
	// 					id={'value'}
	// 					name={'value'}
	// 					placeholder={'What do you think of this idea?'}
	// 					error={errors['value']}
	// 					errorText={'Your comment can not be empty.'}
	// 					control={control}
	// 				/>
	// 			</Form>
	// 		),
	// 		actions: (
	// 			<SubmitButton
	// 				name={'open-modal-drawer-post-comment-button'}
	// 				form={'postCommentForm'}
	// 				label={'Post'}
	// 				size={'xs'}
	// 			/>
	// 		),
	// 		hideFooter: true
	// 	});
	// };

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
