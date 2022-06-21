import TabLayout from '@/components/layouts/TabLayout';
import { useCurrentUser } from '@/hooks/auth';
import React from 'react';
import InterestedUsersTab from './components/InterestedUsersTab';
import useIdea from './query/ideaQuery';
import IdeaTab from './IdeaTab';
import { useMobile } from '@/hooks/util';
import IdeaCycler from './components/IdeaCycler';

const ViewIdeaTabLayout = () => {
	const user = useCurrentUser();
	const isMobile = useMobile();
	const { idea } = useIdea() ?? {};
	const showInterestTab = idea?.userId === user?.id;

	if (isMobile) {
		return (
			<TabLayout
				tabs={[
					{ label: 'Idea' },

					{
						...(showInterestTab && { label: 'Interest' })
					}
				]}
				overflow="hidden"
				minH="full"
				flex={1}
				actions={<IdeaCycler />}
			>
				<IdeaTab />
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
					...(showInterestTab && { label: 'Interest' })
				}
			]}
			overflow="hidden"
			minH="full"
			flex={1}
			borderColor="fpLightGrey.900"
			borderWidth={{ lg: 1 }}
			actions={<IdeaCycler />}
		>
			<IdeaTab />
			{showInterestTab ? <InterestedUsersTab /> : <></>}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
