import { BaseMenu } from 'components/menu';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import { TIdea_Preview, TReport_Insert_Input } from 'generated/api';
import React from 'react';

// enum ACTION_TYPE {
// 	SHARE,
// 	REPORT
// }

type TIdeaProps = Pick<TIdea_Preview, 'id' | 'idea_user'>;

export const IdeaMenu = (idea: TIdeaProps): JSX.Element => {
	const report: TReport_Insert_Input = {
		type: 'IDEA',
		reportedId: idea?.id,
		reportedUserId: idea?.idea_user.id
	};

	return (
		<BaseMenu>
			{/* <BaseMenuItem
				title={'Share'}
				subTitle={'Share this idea'}
				icon={IoShareSocialSharp}
				divider={true}
			/> */}
			<ReportMenu title={'idea'} report={report} />
		</BaseMenu>
	);
};

export default IdeaMenu;
