import TabLayout from '@components/layouts/TabLayout';
import IdeaContext from '@context/idea/IdeaContext';
import { useCurrentUser } from '@hooks/auth';
import { useMobile } from '@hooks/util';
import React, { useContext } from 'react';
import CommentsList from './components/comments/CommentsList';
import InterestedUsersTab from './components/InterestedUsersTab';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = () => {
	const user = useCurrentUser();
	const { data } = useContext(IdeaContext);

	console.log('data: ', data);

	const showInterestTab = data?.idea?.userId === user?.id;
	// const showInterestedUsers =
	// 	showInterestTab && data?.idea?.totalInterested > 0;

	return (
		<TabLayout
			tabs={[
				{ label: 'Idea' },
				{ ...(useMobile() ? { label: 'Comments' } : { label: '' }) },
				{ ...(showInterestTab ? { label: 'Interest' } : { label: '' }) }
			]}
			overflow={'hidden'}
			minH={'full'}
			flex={1}
		>
			<IdeaTab />

			{showInterestTab ? <InterestedUsersTab /> : <></>}
			{useMobile() ? <CommentsList /> : <></>}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
