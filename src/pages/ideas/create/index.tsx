import { PageLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import CreateEditIdeaForm from '../components/CreateEditIdeaForm';

const CreateIdea = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout title="Create your idea">
			{/* <StackLayout alignItems={'center'} direction={'row'}>
				<Image
					src="/new-idea.svg"
					mx="auto"
					alt="logo"
					boxSize={{ base: 100, sm: 200 }}
					marginX={0}
				/>
				<Label
					fontSize={{ base: 'sm', sm: 'md' }}
					fontWeight={'medium'}
				>
					You have an exciting new idea and want to share it with the
					community. We have you covered!
				</Label>
			</StackLayout> */}
			<CreateEditIdeaForm />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(CreateIdea);
