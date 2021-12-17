import { CancelButton, PrimaryButton, SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { TextareaField } from 'components/input';
import { StackLayout } from 'components/layouts';
import ModalDrawerContext from 'context/ModalDrawerContext';
import {
	TIdea_Comments_Insert_Input,
	usePostReplyMutation
} from 'generated/api';
import { GET_COMMENTS_FOR_IDEA } from 'graphql/comments';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const PostReplyComment = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		getValues,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<Pick<TIdea_Comments_Insert_Input, 'value'>>({
		mode: 'all'
	});

	const [showReplyField, setShowReplyField] = useState(false);

	const router = useRouter();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const [postReplyMutation] = usePostReplyMutation({
		variables: {
			reply: {
				// comment_id: router.query.id as string,
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
			title: 'Post your reply',
			isOpen: true,
			body: (
				<Form
					id={'postReplyToCommentForm'}
					name={'postReplyToCommentForm'}
					onSubmit={handleSubmit(postReplyMutation)}
					isSubmitting={isSubmitting}
					isValid={isValid}
				>
					<TextareaField
						id="value"
						name="value"
						placeholder="Post your reply to this comment"
						error={errors['value']}
						errorText="Your reply can not be empty."
						control={control}
					/>
				</Form>
			),
			actions: (
				<SubmitButton
					name={'open-modal-drawer-post-reply-button'}
					form="postReplyToCommentForm"
					label={'Post'}
				/>
			),
			hideFooter: true
		});
	};

	const onShowReplyClick = () => {
		setShowReplyField(!showReplyField);
	};

	return (
		<>
			{' '}
			{showReplyField ? (
				<Form
					id={'postReplyToCommentForm'}
					name={'postReplyToCommentForm'}
					onSubmit={handleSubmit(postReplyMutation)}
					isSubmitting={isSubmitting}
					isValid={isValid}
					stackProps={{ mt: 2, w: 'full' }}
				>
					<TextareaField
						id="value"
						name="value"
						placeholder="Post your reply to this comment"
						error={errors['value']}
						errorText="Your reply can not be empty."
						control={control}
						w={'full'}
						size={'xs'}
					/>
					<StackLayout
						direction={'row'}
						spacing={2}
						mt={0}
						justifyContent={'flex-end'}
					>
						<CancelButton
							label={'Cancel'}
							size={'xs'}
							onClick={onShowReplyClick}
						/>
						<SubmitButton
							name={'open-modal-drawer-post-reply-button'}
							form="postReplyToCommentForm"
							label={'Post'}
							size={'xs'}
						/>
					</StackLayout>
				</Form>
			) : (
				<PrimaryButton
					name={'reply-to-comment'}
					onClick={onShowReplyClick}
					variant={'unstyled'}
					color={'gray.500'}
					fontSize={'xs'}
				>
					Reply
				</PrimaryButton>
			)}
		</>
	);
};

export default PostReplyComment;
