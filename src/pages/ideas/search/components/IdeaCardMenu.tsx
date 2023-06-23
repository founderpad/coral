import { BaseMenu } from '@/components/menu';
import ReportMenu from '@/components/shared/report/ReportMenu';
import {
	TIdeaPreviewFieldsFragment,
	TReport_Insert_Input
} from '@/generated/api';
import React from 'react';

type TIdeaProps = Pick<TIdeaPreviewFieldsFragment, 'id' | 'user' | 'name'>;

export const IdeaCardMenu = (idea: TIdeaProps) => {
	const report: TReport_Insert_Input = {
		reportedId: idea?.id,
		reportedUserId: idea?.user?.id,
		recipientName: idea?.user?.displayName,
		recipientEmail: idea?.user?.email,
		content: idea?.name,
		type: 'IDEA'
	};

	return (
		<BaseMenu>
			{/* <BaseMenuItem
				title="Share"
				subTitle="Share this idea"
				icon={IoShareSocialSharp}
				divider={true}
			/> */}
			<ReportMenu
				title="idea"
				report={report}
				content={`"${idea.name}"`}
			/>
		</BaseMenu>
	);
};

export default IdeaCardMenu;
