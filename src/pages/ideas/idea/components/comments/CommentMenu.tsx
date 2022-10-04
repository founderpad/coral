import { BaseMenu } from '@/components/menu';
import ReportMenu from '@/components/shared/actionsmenu/ReportMenu';
import React from 'react';

export const CommentMenu = (comment: any) => {
	const { value, user } = comment;

	return (
		<BaseMenu>
			<ReportMenu
				title="comment"
				content={`"${value}"`}
				report={{
					type: 'COMMENT',
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
