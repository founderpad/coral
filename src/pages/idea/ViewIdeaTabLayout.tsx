import TabLayout from 'components/layouts/TabLayout';
import IdeaContext from 'context/idea/IdeaContext';
import { useCurrentUser } from 'hooks/auth';
import { useMobile } from 'hooks/util';
import React, { useContext } from 'react';
import { CommentsList } from './components/comments';
import InterestedUsersTab from './components/InterestedUsersTab';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = (): JSX.Element => {
	const user = useCurrentUser();
	const { data } = useContext(IdeaContext);

	return (
		<TabLayout
			tabs={[
				{ label: 'Idea' },
				{
					...(data?.idea.user_id === user.id && {
						label: 'Interest'
					})
				},
				{ ...(useMobile() && { label: 'Comments' }) }
			]}
			overflow={'hidden'}
			minH={'full'}
			flex={1}
		>
			<IdeaTab />
			<InterestedUsersTab ideaId={data?.idea.id} />
			{useMobile() && <CommentsList />}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
