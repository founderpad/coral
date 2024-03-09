import { ButtonGroup } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import { CancelButton, PrimaryButton } from '@/components/buttons';
import { FlexLayout, StackLayout } from '@/components/layouts';
import {
	RepliesForCommentDocument,
	usePostReplyMutation
} from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { useSuccessNotification } from '@/hooks/toast';
import { event } from '@/lib/ga';
import React, { useCallback, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';
import useCachedIdea from '@/features/idea/viewidea/query/ideaQuery';

interface ReplyToCommentProps {
	commentId: string;
	commentUserId: string;
}

const ReplyToComment = ({ commentId, commentUserId }: ReplyToCommentProps) => {
	const [showReplyField, setShowReplyField] = useState(false);
	const [value, setValue] = useState('');
	const user = useAuth().getUser();
	const { idea } = useCachedIdea() ?? {};
	const showNotification = useSuccessNotification();

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
					from_user_id: user?.id,
					from_user_display_name: user?.displayName,
					from_user_email: user?.email
				}
			});

			if (user?.id !== idea?.userId) {
				showNotification({
					title: '+10 Esteem Points',
					description: 'You have earned 10 Esteem Points'
				});
			}
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

export default ReplyToComment;
