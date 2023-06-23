import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';
import { PageHtmlHead } from '@/components/shared';
import { useIdea } from './hooks/useIdea.page';

const ViewIdea: NextPage = () => {
	useIdea();
	const ideaId = useQueryParam('id');

	return (
		<>
			<PageHtmlHead
				title="View idea"
				pageSlug={`idea/${ideaId}`}
				description="View this idea and see whether or not you would be interested in collaborating on it, and how popular it is with other users."
			/>
			<ViewIdeaTabLayout />
		</>
	);
};

export default AuthFilter(ViewIdea);
