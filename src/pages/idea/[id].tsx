import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea = () => (
	<React.Fragment>
		<DocumentTitle title="View idea" />
		<ViewIdeaTabLayout />
	</React.Fragment>
);

export default AuthFilter(ViewIdea);
