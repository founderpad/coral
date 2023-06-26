import { BaseMenu } from '@/components/menu';
import { ReportMenu } from '@/components/shared/report';

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
