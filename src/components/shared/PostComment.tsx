import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Textarea } from '@chakra-ui/textarea';
import { StackLayout } from 'components/layouts';
import { usePostCommentMutation } from 'generated/api';
import useIdeaFragment from 'pages/idea/fragments/IdeaFragment';
import React, { useCallback, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import ResizeTextarea from 'react-textarea-autosize';
import { CurrentUserAvatar } from './UserAvatar';

const PostComment = (): JSX.Element => {
	const [value, setValue] = useState('');
	// const { setModalDrawer } = useContext(ModalDrawerContext);

	const [postCommentMutation] = usePostCommentMutation({
		variables: {
			ideaComment: {
				idea_id: useIdeaFragment()?.id,
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

						console.log('result: ', result);
					}
				}
			});
		},
		// refetchQueries: [
		// 	{
		// 		query: GET_COMMENTS_FOR_IDEA,
		// 		variables: {
		// 			ideaId: useIdeaFragment().id
		// 		}
		// 	}
		// ],
		onCompleted: () => {
			// setModalDrawer({
			// 	isOpen: false
			// });

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
				<CurrentUserAvatar small />

				<Textarea
					name={'value'}
					id={'value'}
					minH={'unset'}
					placeholder={'Write your comment here'}
					w={'full'}
					as={ResizeTextarea}
					onChange={onValueChange}
					value={value}
					borderWidth={2}
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
