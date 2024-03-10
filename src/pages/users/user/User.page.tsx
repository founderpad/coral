import { PageLayout } from '@/components/layouts';
import { Loading, PageHtmlHead } from '@/components/shared';
import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import Actions from '@/features/users/viewuser/components/Actions';
import useUser from '@/features/users/viewuser/hooks/useUser';
import { ViewUserContainer } from '@/features/users/viewuser';

const ViewUser: NextPage = () => {
	const { data, loading } = useUser();
	const userId = useQueryParam('id');

	if (!data && loading) return <Loading />;

	return (
		<>
			<PageHtmlHead
				title="View user"
				pageSlug={`/user/${userId}`}
				description="View user."
			/>
			<PageLayout
				title={`${data?.displayName}'s profile`}
				action={<Actions />}
			>
				<ViewUserContainer {...data} />
			</PageLayout>
		</>
	);
};

export default AuthFilter(ViewUser);
