import PageLayout from 'components/layouts/PageLayout';
import WindowTitle from 'components/shared/WindowTitle';
import CreateEditIdeaForm from 'pages/ideas/components/CreateEditIdeaForm';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const NewIdea = (): JSX.Element => {
	return (
		<React.Fragment>
			<WindowTitle title="Create idea" />
			<PageLayout
				title="Create your idea"
				subtitle="Fill out a field fields below to create your idea"
			>
				<CreateEditIdeaForm />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(NewIdea);
