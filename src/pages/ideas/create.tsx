import { PageLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import CreateEditIdeaForm from 'pages/ideas/components/CreateEditIdeaForm';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const NewIdea = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout
			title="Create your idea"
			subtitle="Fill out a field fields below to create your idea"
		>
			<CreateEditIdeaForm />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(NewIdea);
