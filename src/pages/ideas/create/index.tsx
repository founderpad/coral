import { PageLayout } from '@components/layouts';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';
import CreateIdeaForm from '../components/CreateIdeaForm';

const CreateIdea = () => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout title="Create your idea">
			<CreateIdeaForm />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(CreateIdea);
