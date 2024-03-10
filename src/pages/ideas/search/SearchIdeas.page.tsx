import { SearchContentGridLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import React from 'react';
import { NextPage } from 'next';
import { PageHtmlHead } from '@/components/shared';
import { IdeasContainer } from '@/features/idea/search';
import { IdeasSearchForm } from '@/features/idea/components';

const SearchIdeas: NextPage = () => (
	<>
		<PageHtmlHead
			title="Search ideas"
			pageSlug="ideas/search?page=1"
			description="Search all ideas to collaborate, or form a team."
		/>

		<SearchContentGridLayout search={<IdeasSearchForm />}>
			<IdeasContainer />
		</SearchContentGridLayout>
	</>
);

export default AuthFilter(SearchIdeas);
