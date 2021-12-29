import TabLayout from 'components/layouts/TabLayout';
import { useGetIdeaQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useMobile, useQueryParam } from 'hooks/util';
import React from 'react';
import { CommentsList } from './components/comments';
import InterestedUsersTab from './components/InterestedUsersTab';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = (): JSX.Element => {
	const user = useCurrentUser();
	const { data } = useGetIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		}
	});

	const isIdeaUser = data?.idea?.user_id === user.id;

	return (
		<TabLayout
			tabs={[
				{ label: 'Idea' },
				{ ...(isIdeaUser && { label: 'Interest' }) },
				{ ...(useMobile() && { label: 'Comments' }) }
			]}
			overflow={'hidden'}
			minH={'full'}
			flex={1}
		>
			<IdeaTab data={data} />
			{<InterestedUsersTab ideaId={data?.idea?.id} />}
			{useMobile() && <CommentsList />}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
