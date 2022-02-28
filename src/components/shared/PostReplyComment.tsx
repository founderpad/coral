import { ButtonGroup } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import { CancelButton, PrimaryButton } from '@components/buttons';
import { FlexLayout, StackLayout } from '@components/layouts';
import {
	RepliesForCommentDocument,
	usePostReplyMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import useIdea from '@pages/ideas/idea/query/ideaQuery';
import React, { useCallback, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';

const PostReplyComment = ({
	commentId,
	commentUserId
}: {
	commentId: string;
	commentUserId: string;
}) => {
	const [showReplyField, setShowReplyField] = useState(false);
	const [value, setValue] = useState('');
	const user = useCurrentUser();
	const { idea } = useIdea() ?? {};

	const [postReplyMutation] = usePostReplyMutation({
		variables: {
			ideaReply: {
				commentId: commentId,
				targetUserId: commentUserId,
				ideaId: idea?.id,
				value
			},
			commentId
		},
		refetchQueries: [
			{
				query: RepliesForCommentDocument,
				variables: {
					commentId
				}
			}
		],
		onCompleted: () => {
			setShowReplyField(!showReplyField);
			event({
				action: 'Post reply',
				params: {
					reply: value,
					idea_id: idea?.id,
					comment_id: commentId,
					to_user_id: commentUserId,
					from_user_id: user.id,
					from_user_display_name: user.displayName,
					from_user_email: user.email
				}
			});
		}
	});

	const onShowReplyClick = () => {
		setShowReplyField(!showReplyField);
		setValue('');
	};

	const onValueChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setValue(e.target.value);
		},
		[]
	);

	return (
		<FlexLayout flexDirection="column" alignItems="flex-start" w="full">
			<PrimaryButton
				name="reply-to-comment"
				onClick={onShowReplyClick}
				variant="unstyled"
				color="gray.500"
				fontSize="xs"
			>
				Reply
			</PrimaryButton>
			{showReplyField && (
				<StackLayout
					py={3}
					spacing={2}
					justifyContent="space-between"
					alignItems="flex-end"
					w="full"
				>
					<Textarea
						name="value"
						id="value"
						minH="unset"
						placeholder="Write your reply here"
						w="full"
						as={ResizeTextarea}
						onChange={onValueChange}
						value={value}
						maxRows={3}
						resize="none"
						maxH="100px"
						p={2}
						autoFocus
						title="Write your reply here"
						_focus={{
							borderColor: 'gray.400',
							boxShadow: 'none'
						}}
					/>
					<ButtonGroup alignItems="center">
						<CancelButton
							label="Cancel"
							size="xs"
							onClick={onShowReplyClick}
						/>
						<PrimaryButton
							name="send-reply"
							size="xs"
							onClick={() => postReplyMutation()}
						>
							Send
						</PrimaryButton>
					</ButtonGroup>
				</StackLayout>
			)}
		</FlexLayout>
	);
};

export default PostReplyComment;
