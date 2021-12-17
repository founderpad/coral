import Icon from '@chakra-ui/icon';
import { PrimaryButton, SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { TextareaField } from 'components/input';
import ModalDrawerContext from 'context/ModalDrawerContext';
import {
	TIdea_Comments_Insert_Input,
	usePostCommentMutation
} from 'generated/api';
import { GET_COMMENTS_FOR_IDEA } from 'graphql/comments';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IoAddSharp } from 'react-icons/io5';

const PostComment = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		getValues,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<Pick<TIdea_Comments_Insert_Input, 'value'>>({
		mode: 'all'
	});

	const router = useRouter();
	const { setModalDrawer } = useContext(ModalDrawerContext);

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
			setModalDrawer({
				isOpen: false
			});
		}
	});

	const onClick = () => {
		reset({
			value: ''
		});
		setModalDrawer({
			title: 'Post your comment',
			isOpen: true,
			body: (
				<Form
					id={'postCommentForm'}
					name={'postCommentForm'}
					onSubmit={handleSubmit(postCommentMutation)}
					isSubmitting={isSubmitting}
					isValid={isValid}
				>
					<TextareaField
						id={'value'}
						name={'value'}
						placeholder={'What do you think of this idea?'}
						error={errors['value']}
						errorText={'Your comment can not be empty.'}
						control={control}
					/>
				</Form>
			),
			actions: (
				<SubmitButton
					name={'open-modal-drawer-post-comment-button'}
					form={'postCommentForm'}
					label={'Post'}
				/>
			),
			hideFooter: true
		});
	};

	return (
		<PrimaryButton name={'add-comment'} onClick={onClick}>
			<Icon as={IoAddSharp} mr={2} /> Add comment
		</PrimaryButton>
	);
};

export default PostComment;
