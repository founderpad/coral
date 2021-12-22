import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Textarea } from '@chakra-ui/textarea';
import { Form } from 'components/form';
import { StackLayout } from 'components/layouts';
import {
	TIdea_Comments_Insert_Input,
	usePostCommentMutation
} from 'generated/api';
import { GET_COMMENTS_FOR_IDEA } from 'graphql/comments';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoSendSharp } from 'react-icons/io5';
import ResizeTextarea from 'react-textarea-autosize';
import { CurrentUserAvatar } from './UserAvatar';

const PostComment = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		getValues,
		reset,
		watch,
		formState: { errors, isSubmitting, isValid }
	} = useForm<Pick<TIdea_Comments_Insert_Input, 'value'>>({
		mode: 'all'
	});

	const watchMessageValue = watch('value', '');

	// useEffect(() => {
	// 	const subscription = watch((value, { name, type }) =>
	// 		// console.log(value, name, type)
	// 	);
	// 	return () => subscription.unsubscribe();
	// }, []);

	const router = useRouter();
	// const { setModalDrawer } = useContext(ModalDrawerContext);

	const [postCommentMutation] = usePostCommentMutation({
		variables: {
			comment: {
				idea_id: router.query.id as string,
				value: getValues('value')
			}
		},
		refetchQueries: [
			{
				query: GET_COMMENTS_FOR_IDEA,
				variables: {
					ideaId: router.query.id
				}
			}
		],
		onCompleted: () => {
			// setModalDrawer({
			// 	isOpen: false
			// });
		}
	});

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
				<Form
					id={'postCommentForm'}
					name={'postCommentForm'}
					onSubmit={handleSubmit(postCommentMutation)}
					isSubmitting={isSubmitting}
					isValid={isValid}
					style={{ width: '100%' }}
				>
					<Textarea
						id={'value'}
						minH={'unset'}
						placeholder={'Write your comment here'}
						borderWidth={0}
						w={'full'}
						as={ResizeTextarea}
						maxRows={3}
						resize={'none'}
						maxH={'100px'}
						title={'Write your comment here'}
						_focus={{
							borderColor: 'gray.400',
							boxShadow: 'none'
						}}
					/>
				</Form>

				<IconButton
					aria-label={'send-message'}
					variant={'unstyled'}
					color={'fpPrimary.500'}
					title={'Send message'}
					visibility={watchMessageValue ? 'visible' : 'collapse'}
				>
					<Icon as={IoSendSharp} />
				</IconButton>
			</StackLayout>
		</StackLayout>
	);
};

export default PostComment;
