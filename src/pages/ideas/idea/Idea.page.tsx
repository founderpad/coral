import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import { PageHtmlHead } from '@/components/shared';
import ViewIdeaContainer from './ViewIdeaContainer';

const ViewIdea: NextPage = () => {
	const ideaId = useQueryParam('id');

	// Transfer text to i18next to support different languages
	return (
		<>
			<PageHtmlHead
				title="View idea"
				pageSlug={`idea/${ideaId}`}
				description="View this idea and see whether or not you would be interested in collaborating on it, and how popular it is with other users."
			/>
			<ViewIdeaContainer ideaId={ideaId} />
		</>
	);
};

export default AuthFilter(ViewIdea);
