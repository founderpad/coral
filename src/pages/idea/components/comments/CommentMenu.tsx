import { BaseMenu } from 'components/menu';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import React from 'react';

export const CommentMenu = (comment: any) => {
	const { value, user } = comment;
	const { id, displayName, email } = user;

	return (
		<BaseMenu>
			<ReportMenu
				title={'comment'}
				content={`"${value}"`}
				report={{
					type: 'COMMENT',
					reportedUserId: id,
					recipientName: displayName,
					recipientEmail: email,
					content: value
				}}
			/>
		</BaseMenu>
	);
};

export default CommentMenu;
