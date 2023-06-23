import SearchContentGridLayout from '@/components/layouts/SearchContentGridLayout';
import AuthFilter from '@/utils/AuthFilter';
import React from 'react';
import IdeasSearchForm from './components/IdeasSearchForm';
import IdeasContainer from './IdeasContainer';
import { NextPage } from 'next';
import { PageHtmlHead } from '@/components/shared';

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
