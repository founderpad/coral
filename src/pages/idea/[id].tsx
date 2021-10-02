import WindowTitle from 'components/shared/WindowTitle';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea = () => {
	return (
		<React.Fragment>
			<WindowTitle title="View idea" />
			<ViewIdeaTabLayout />
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
