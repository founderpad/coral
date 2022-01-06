import { BaseMenu } from 'components/menu';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import { TIdea_Preview, TReport_Insert_Input } from 'generated/api';
import React from 'react';

// enum ACTION_TYPE {
// 	SHARE,
// 	REPORT
// }

type TIdeaProps = Pick<TIdea_Preview, 'id' | 'user' | 'name'>;

export const IdeaMenu = (idea: TIdeaProps): JSX.Element => {
	const report: TReport_Insert_Input = {
		reported_id: idea?.id,
		reported_user_id: idea?.user.id,
		recipient_name: idea?.user.first_name,
		recipient_email: idea?.user.account.email,
		content: idea?.name,
		type: 'IDEA'
	};

	return (
		<BaseMenu>
			{/* <BaseMenuItem
				title={'Share'}
				subTitle={'Share this idea'}
				icon={IoShareSocialSharp}
				divider={true}
			/> */}
			<ReportMenu
				title={'idea'}
				report={report}
				content={`"${idea.name}"`}
			/>
		</BaseMenu>
	);
};

export default IdeaMenu;
