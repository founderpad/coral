import TabLayout from '@/components/layouts/TabLayout';
import React from 'react';
import InterestedUsersTab from './components/InterestedUsersTab';
import IdeaTab from './IdeaTab';
import { useMobile } from '@/hooks/util';
import IdeaCycler from './components/IdeaCycler';
import { useUserData } from '@nhost/react';
import useIdea from './hooks/idea';

interface ViewIdeaContainerProps {
	ideaId: string;
}

const ViewIdeaContainer = ({ ideaId }: ViewIdeaContainerProps) => {
	const user = useUserData();
	const isMobile = useMobile();
	const { data } = useIdea(ideaId, user!.id); // Idea page is protected by the auth filter so this will always have a value, otherwise the user is redirected to login
	const showInterestTab = data?.idea === user?.id;

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

export default ViewIdeaContainer;
