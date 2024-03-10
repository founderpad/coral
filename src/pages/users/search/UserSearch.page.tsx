import SearchContentGridLayout from '@/components/layouts/SearchContentGridLayout';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import UsersSearchForm from '../../../features/users/search/components/UsersSearchForm';
import UsersContainer from '../../../features/users/search/UsersContainer';

const UsersSearch: NextPage = () => (
	<>
		<PageHtmlHead
			title="Search users"
			pageSlug="/users/search?page=1"
			description="View all users."
		/>

		<SearchContentGridLayout search={<UsersSearchForm />}>
			<UsersContainer />
		</SearchContentGridLayout>
	</>
);

export default AuthFilter(UsersSearch);
