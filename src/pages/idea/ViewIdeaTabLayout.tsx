import TabLayout from 'components/layouts/TabLayout';
import React from 'react';
import CommentsTab from './CommentsTab';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = (): JSX.Element => (
	<TabLayout
		tabs={[{ label: 'Idea' }, { label: 'Comments' }]}
		overflow={'hidden'}
		minH={'full'}
		px={2}
		isLazy
	>
		<IdeaTab />
		<CommentsTab />
	</TabLayout>
);

export default ViewIdeaTabLayout;
