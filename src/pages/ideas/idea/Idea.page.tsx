import { useIdeaQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';
import { PageHtmlHead } from '@/components/shared';

const ViewIdea: NextPage = () => {
	const userId = useAuth().getUser()?.id;
	const ideaId = useQueryParam('id');

	useIdeaQuery({
		variables: {
			id: ideaId,
			userId
		}
	});

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
