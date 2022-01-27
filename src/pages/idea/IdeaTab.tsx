import { StackLayout } from '@components/layouts';
import { Loading } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import React from 'react';
import CommentsList from './components/comments/CommentsList';
import IdeaDetails from './components/IdeaDetails';
import { IdeaOverview } from './components/IdeaOverview';
import IdeaTitleHeader from './components/IdeaTitleHeader';
import { IdeaUserActions } from './components/IdeaUserActions';
import InterestedIdea from './components/InterestedIdea';
import useIdea from './query/ideaQuery';

const IdeaTab = () => {
	// const auth = useCurrentUser();
	const data = useIdea();

	if (!data) return <Loading small />;
	// if (!idea.isPublished && auth.id !== idea.userId) Router.replace('/404');

	return (
		<StackLayout
			direction={'row'}
			flex={1}
			rounded={'none'}
			overflowY={'hidden'}
			spacing={0}
		>
			<StackLayout p={4} flex={1} d={'flex'} overflowY={'auto'}>
				<IdeaUserActions />
				<IdeaTitleHeader />
				<InterestedIdea />
				<AppDivider />
				<IdeaOverview />
				<AppDivider />
				<IdeaDetails />
				<CommentsList display={{ base: 'none', md: 'flex' }} />
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaTab;
