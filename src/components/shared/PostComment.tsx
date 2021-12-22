import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Form } from 'components/form';
import { TextareaField } from 'components/input';
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
		// <PrimaryButton name={'add-comment'} onClick={onClick} size={'xs'}>
		// 	<Icon as={IoAddSharp} color={'white'} fontSize={'lg'} mr={2} /> Add
		// </PrimaryButton>

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
					{/* <InputField
						id={'value'}
						name={'value'}
						placeholder={'Write your comment here'}
						control={control}
						borderWidth={0}
						w={'full'}
						title={'Write your comment here'}
					/> */}

					<TextareaField
						id={'value'}
						name={'value'}
						placeholder={'Write your comment here'}
						control={control}
						borderWidth={0}
						w={'full'}
						resize={'none'}
						maxH={'100px'}
						title={'Write your comment here'}
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
