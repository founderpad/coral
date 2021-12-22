import { CancelButton, PrimaryButton, SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { TextareaField } from 'components/input';
import { FlexLayout, StackLayout } from 'components/layouts';
import {
	TIdea_Comments_Insert_Input,
	usePostReplyMutation
} from 'generated/api';
import { GET_REPLIES_FOR_COMMENT } from 'graphql/comments';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PostReplyComment = ({
	commentId
}: {
	commentId: string;
}): JSX.Element => {
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

	const [postReplyMutation] = usePostReplyMutation({
		variables: {
			reply: {
				comment_id: commentId,
				value: getValues('value')
			},
			commentId
		},
		refetchQueries: [
			{
				query: GET_REPLIES_FOR_COMMENT,
				variables: {
					commentId
				}
			}
		],
		onCompleted: () => {
			setShowReplyField(!showReplyField);
		}
	});

	const onShowReplyClick = () => {
		reset({
			value: ''
		});
		setShowReplyField(!showReplyField);
	};

	return (
		<FlexLayout
			flexDirection={'column'}
			alignItems={'flex-start'}
			w={'full'}
		>
			{' '}
			<PrimaryButton
				name={'reply-to-comment'}
				onClick={onShowReplyClick}
				variant={'unstyled'}
				color={'gray.500'}
				fontSize={'xs'}
			>
				Reply
			</PrimaryButton>
			{showReplyField && (
				<Form
					id={'postReplyToCommentForm'}
					name={'postReplyToCommentForm'}
					onSubmit={handleSubmit(postReplyMutation)}
					isSubmitting={isSubmitting}
					isValid={isValid}
					stackProps={{ mt: 2, w: 'full' }}
					style={{ flex: 1, width: '100%' }}
				>
					<TextareaField
						id="value"
						name="value"
						placeholder="Post a reply"
						error={errors['value']}
						errorText="Your reply can not be empty."
						control={control}
						bg={'white'}
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
			)}
		</FlexLayout>
	);
};

export default PostReplyComment;
