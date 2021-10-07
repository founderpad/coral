import DocumentTitle from 'components/shared/DocumentTitle';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea = () => {
	return (
		<React.Fragment>
			<DocumentTitle title="View idea" />
			<ViewIdeaTabLayout />
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
