import { StackLayout } from '@/components/layouts';
import { AppDivider, Loading } from '@/components/shared';
import { useMobile } from '@/hooks/util';
import React from 'react';
import IdeaDetails from './components/IdeaDetails';
import IdeaTitleHeader from './components/IdeaTitleHeader';
import { IdeaOverview } from './components/IdeaOverview';
import { IdeaUserActions } from './components/IdeaUserActions';
import InterestedIdea from './components/InterestedIdea';
import useCachedIdea from './query/ideaQuery';
import { CommentsList } from '@/features/comments/components';

const IdeaTab = () => {
	const data = useCachedIdea();
	const isMobile = useMobile();

	if (!data) return <Loading small />;

	return (
		<StackLayout
			direction="column"
			flex={1}
			rounded="none"
			overflowY="hidden"
			spacing={0}
		>
			<StackLayout p={4} flex={1} display="flex" overflowY="auto">
				<IdeaUserActions />
				<IdeaTitleHeader />
				<InterestedIdea />
				<AppDivider />
				<IdeaOverview />
				<AppDivider />
				<IdeaDetails />
				<AppDivider />
				{!isMobile && <CommentsList />}
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaTab;
