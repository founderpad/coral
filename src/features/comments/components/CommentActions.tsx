import { StackLayout } from '@/components/layouts';
import React from 'react';
import CommentMenu from './CommentMenu';
import ReplyToComment from './ReplyToComment';

export const CommentActions = ({
	showReply,
	comment
}: {
	showReply: boolean;
	comment: any;
}) => {
	const { id, status } = comment;
	const isApproved = status == 'APPROVED';

	return (
		<StackLayout direction="row" spacing={1} alignItems="center">
			{showReply && isApproved && (
				<ReplyToComment
					commentId={id}
					commentUserId={comment.user?.id}
				/>
			)}
			{isApproved && <CommentMenu {...comment} />}
		</StackLayout>
	);
};

export default CommentActions;
