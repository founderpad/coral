import { BaseMenu } from 'components/menu';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import React from 'react';

export const CommentMenu = (comment: any): JSX.Element => {
	const { value, user } = comment;
	const {
		id,
		display_name,
		account: { email }
	} = user;
	return (
		<BaseMenu>
			<ReportMenu
				title={'comment'}
				content={`"${value}"`}
				report={{
					type: 'COMMENT',
					reported_user_id: id,
					recipient_name: display_name,
					recipient_email: email,
					content: value
				}}
			/>
		</BaseMenu>
	);
};

export default CommentMenu;
