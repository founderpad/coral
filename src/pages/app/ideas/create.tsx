import { Image } from '@chakra-ui/image';
import { Label } from 'components/labels';
import { PageLayout, StackLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import CreateEditIdeaForm from 'pages/app/ideas/components/CreateEditIdeaForm';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const NewIdea = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout title="Create your idea">
			<StackLayout mb={6} alignItems={'center'} direction={'row'}>
				<Image
					src="/new-idea.svg"
					mx="auto"
					alt="logo"
					boxSize={{ base: 100, sm: 200 }}
				/>
				<Label
					fontSize={{ base: 'sm', sm: 'md' }}
					fontWeight={'medium'}
					label={
						'You have an exciting new idea and want to share it with the community. We have you covered!'
					}
				/>
			</StackLayout>
			<CreateEditIdeaForm />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(NewIdea);
