import { StackLayout } from '@/components/layouts';
import {
	AppDivider,
	Loading,
	NoResults,
	PageHeader
} from '@/components/shared';
import SearchActions from '@/components/shared/SearchActions';
import { TUserSearchFragment } from '@/generated/api';
import MobileFilterMenu from '@/pages/ideas/search/components/MobileFilterMenu';
import OffsetPagination from '@/pages/ideas/search/OffsetPagination';
import React from 'react';
import UserCard from './components/UserCard';
import UsersSearchForm from './components/UsersSearchForm';
import { useUsers } from './hooks/useUsers.page';

const UsersContainer = () => {
	const { data, total, loading } = useUsers();
	const hasResults = data?.length ?? 0;

	if (loading) return <Loading small />;

	return (
		<>
			<PageHeader title="All users" subtitle="Search all users" />
			<StackLayout p={{ base: 4, sm: 6 }} flex={1}>
				<SearchActions total={total} pageSize={data?.length ?? 0}>
					<MobileFilterMenu title="users" form="users-filter-form">
						<UsersSearchForm />
					</MobileFilterMenu>
				</SearchActions>
				{!loading && hasResults < 1 ? (
					<NoResults back />
				) : (
					<StackLayout display="flex" spacing={6}>
						{data?.map((searchedUser: TUserSearchFragment) => (
							<React.Fragment key={searchedUser.user?.id}>
								<UserCard {...searchedUser} />
								<AppDivider />
							</React.Fragment>
						))}
					</StackLayout>
				)}
				{hasResults && (
					<OffsetPagination
						pagesCount={(total || 0) / 10}
						pathname="/users/search"
					/>
				)}
			</StackLayout>
		</>
	);
};

export default UsersContainer;
