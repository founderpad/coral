import { StackLayout } from '@/components/layouts';
import { AppDivider, Loading } from '@/components/shared';
import { useMobile } from '@/hooks/util';
import React from 'react';
import useCachedIdea from './query/ideaQuery';
import { CommentsList } from '@/features/comments/components';
import {
	IdeaOverview,
	IdeaTitleHeader,
	IdeaDetails,
	InterestedIdea,
	IdeaUserActions
} from './components';

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
