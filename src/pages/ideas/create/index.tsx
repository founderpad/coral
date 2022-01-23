import { PageLayout } from '@components/layouts';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';
import CreateEditIdeaForm from '../components/CreateEditIdeaForm';

const CreateIdea = () => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout title="Create your idea">
			<CreateEditIdeaForm />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(CreateIdea);
