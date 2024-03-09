import { BaseMenu } from '@/components/menu';
import { ReportMenu } from '@/components/shared/report';
import { TCommentFieldsFragment } from '@/generated/api';
import React from 'react';

export const CommentMenu = (comment: TCommentFieldsFragment) => {
	const { value, user } = comment;

	return (
		<BaseMenu>
			<ReportMenu
				title="comment"
				content={`"${value}"`}
				report={{
					type: 'COMMENT',
					reportedId: comment?.id,
					reportedUserId: user?.id,
					recipientName: user?.displayName,
					recipientEmail: user?.email,
					content: value
				}}
			/>
		</BaseMenu>
	);
};

export default CommentMenu;
