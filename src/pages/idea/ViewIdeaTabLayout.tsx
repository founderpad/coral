import TabLayout from '@components/layouts/TabLayout';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';
import CommentsList from './components/comments/CommentsList';
import InterestedUsersTab from './components/InterestedUsersTab';
import useIdea from './query/ideaQuery';
import IdeaTab from './IdeaTab';
import { useMobile } from '@hooks/util';

const ViewIdeaTabLayout = () => {
	const user = useCurrentUser();
	const isMobile = useMobile();
	const data = useIdea();
	const showInterestTab = data?.idea?.userId === user?.id;

	if (isMobile) {
		return (
			<TabLayout
				tabs={[
					{ label: 'Idea details' },
					{
						label: 'Comments'
					},
					{
						...(showInterestTab && { label: 'Interested users' })
					}
				]}
				overflow={'hidden'}
				minH={'full'}
				flex={1}
			>
				<IdeaTab />
				<CommentsList />
				{showInterestTab ? <InterestedUsersTab /> : <></>}
				<InterestedUsersTab />
			</TabLayout>
		);
	}

	return (
		<TabLayout
			tabs={[
				{ label: 'Idea details' },
				{
					label: 'Interested users'
				}
			]}
			overflow={'hidden'}
			minH={'full'}
			flex={1}
			borderColor={'fpLightGrey.900'}
			borderWidth={1}
		>
			<IdeaTab />
			{showInterestTab ? <InterestedUsersTab /> : <></>}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
