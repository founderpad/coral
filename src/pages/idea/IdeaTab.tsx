import { StackLayout } from '@components/layouts';
import { Loading } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import IdeaContext from '@context/idea/IdeaContext';
import React, { useContext } from 'react';
import CommentsList from './components/comments/CommentsList';
import IdeaDetails from './components/IdeaDetails';
import { IdeaOverview } from './components/IdeaOverview';
import IdeaTitleHeader from './components/IdeaTitleHeader';
import { IdeaUserActions } from './components/IdeaUserActions';
import InterestedIdea from './components/InterestedIdea';

const IdeaTab = () => {
	// const auth = useCurrentUser();
	const data = useContext(IdeaContext)?.data;

	// useEffect(() => {
	// 	if (!data) Router.replace('/404');
	// 	if (!data?.idea) Router.replace('/404');
	// }, [data]);

	if (!data) return <Loading small />;

	console.log('data: ', data);

	// Only enable the id creator to view their own idea if it's unpublished

	// if (
	// 	!data?.idea ||
	// 	(!data?.idea.isPublished && data?.idea.userId !== auth.id)
	// )
	// 	Router.replace('/404');

	// if (data?.idea) Router.replace('/404');

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
