import { Box, Button, IconButton } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import { FlexLayout, StackLayout } from '@components/layouts';
import { Loading } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import React from 'react';
import {
	IoChevronBack,
	IoChevronBackSharp,
	IoChevronForwardSharp
} from 'react-icons/io5';
import CommentsList from './components/comments/CommentsList';
import IdeaCycler from './components/IdeaCycler';
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
			direction={'column'}
			flex={1}
			rounded={'none'}
			overflowY={'hidden'}
			spacing={0}
		>
			<IdeaCycler />
			<StackLayout p={4} flex={1} d={'flex'} overflowY={'auto'}>
				<IdeaUserActions />
				<IdeaTitleHeader />
				<AppDivider />
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
