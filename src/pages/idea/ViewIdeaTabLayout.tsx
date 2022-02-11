import { useBreakpointValue } from '@chakra-ui/react';
import TabLayout from '@components/layouts/TabLayout';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';
import CommentsList from './components/comments/CommentsList';
import InterestedUsersTab from './components/InterestedUsersTab';
import useIdea from './query/ideaQuery';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = () => {
	const user = useCurrentUser();
	const isMobile = useBreakpointValue({ base: true, md: false });
	const data = useIdea();
	const showInterestTab = data?.idea?.userId === user?.id;

	if (isMobile) {
		return (
			<TabLayout
				tabs={[
					{ label: 'Idea' },
					{
						label: 'Comments'
					},
					{
						...(showInterestTab && { label: 'Interest' })
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
				{ label: 'Idea' },
				{
					label: 'Interest'
				}
			]}
			overflow={'hidden'}
			minH={'full'}
			flex={1}
		>
			<IdeaTab />
			{showInterestTab ? <InterestedUsersTab /> : <></>}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
