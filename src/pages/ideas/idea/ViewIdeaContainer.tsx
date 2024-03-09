import TabLayout from '@/components/layouts/TabLayout';
import React from 'react';
import InterestedUsersTab from './components/InterestedUsersTab';
import IdeaTab from './IdeaTab';
import IdeaCycler from './components/IdeaCycler';
import { useUserData } from '@nhost/react';
import useIdea from './hooks/idea';
import { IconType } from 'react-icons';

interface ViewIdeaContainerProps {
	ideaId: string;
}

interface TabProps {
	label?: string;
	icon?: IconType;
}

const ViewIdeaContainer = ({ ideaId }: ViewIdeaContainerProps) => {
	const user = useUserData();
	const { data } = useIdea(ideaId, user!.id);
	const showInterestTab = data?.idea === user?.id;

	const tabs: TabProps[] = [{ label: 'Idea' }];
	if (showInterestTab) {
		tabs.push({ label: 'Interest' });
	}

	return (
		<TabLayout
			tabs={tabs}
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

export default ViewIdeaContainer;
