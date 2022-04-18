import { AlertFeedback } from '@components/alert';
import { StackLayout } from '@components/layouts';
import { AppDivider, Loading } from '@components/shared';
import { useMobile, useQueryParam } from '@hooks/util';
import React from 'react';
import IdeaDetails from './components/IdeaDetails';
import CommentsList from './components/comments/CommentsList';
import IdeaTitleHeader from './components/IdeaTitleHeader';
import { IdeaOverview } from './components/IdeaOverview';
import { IdeaUserActions } from './components/IdeaUserActions';
import InterestedIdea from './components/InterestedIdea';
import useIdea from './query/ideaQuery';

const IdeaTab = () => {
	const data = useIdea();
	const isChangeSuccess = useQueryParam('exp_success');
	const isChangeError = useQueryParam('exp_error');
	const isMobile = useMobile();

	if (!data) return <Loading small />;
	// if (!idea.isPublished && auth.id !== idea.userId) Router.replace('/404');

	return (
		<StackLayout
			direction="column"
			flex={1}
			rounded="none"
			overflowY="hidden"
			spacing={0}
		>
			<StackLayout p={4} flex={1} d="flex" overflowY="auto">
				{isChangeSuccess && (
					<AlertFeedback
						status="success"
						message="Your idea has been updated successfully"
						w="auto"
						ml="auto"
					/>
				)}

				{isChangeError && (
					<AlertFeedback
						status="error"
						message={
							'Failed to update idea. Please try again later'
						}
						w="auto"
						ml="auto"
					/>
				)}

				<IdeaUserActions />
				<IdeaTitleHeader />
				<InterestedIdea />
				<AppDivider />
				<IdeaOverview />
				<AppDivider />
				<IdeaDetails />
				{!isMobile && <CommentsList />}
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaTab;
