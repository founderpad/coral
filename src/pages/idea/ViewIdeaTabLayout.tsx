import { BoxLayout } from 'components/layouts';
import TabLayout from 'components/layouts/TabLayout';
import React from 'react';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = (): JSX.Element => {
	return (
		<TabLayout
			tabs={[
				{ label: 'Idea' },
				{ label: 'Comments' }
				// { label: 'Pad' },
				// { label: 'Metrics' }
			]}
			overflow={'hidden'}
			minH={'full'}
			isLazy
		>
			<IdeaTab />
			<BoxLayout>Comments</BoxLayout>
			{/* <BoxLayout>Workboard</BoxLayout>
			<BoxLayout>Metrics</BoxLayout> */}
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
