import { BaseMenu } from 'components/menu';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import { TIdea_Preview, TReport_Insert_Input } from 'generated/api';
import React from 'react';

// enum ACTION_TYPE {
// 	SHARE,
// 	REPORT
// }

type TIdeaProps = Pick<TIdea_Preview, 'id' | 'idea_user' | 'name'>;

export const IdeaMenu = (idea: TIdeaProps): JSX.Element => {
	const report: TReport_Insert_Input = {
		reported_id: idea?.id,
		reported_user_id: idea?.idea_user.id,
		recipient_name: idea?.idea_user.first_name,
		recipient_email: idea?.idea_user.account.email,
		content: idea?.name
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
