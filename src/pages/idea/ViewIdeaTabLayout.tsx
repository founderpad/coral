import { Box } from '@chakra-ui/react';
import TabLayout from 'components/layouts/TabLayout';
import React from 'react';
import IdeaTab from './IdeaTab';

const ViewIdeaTabLayout = (): JSX.Element => {
	return (
		<TabLayout
			tabs={[
				{ label: 'Idea' },
				{ label: 'Comments' },
				{ label: 'Pad' },
				{ label: 'Metrics' }
			]}
			overflow={'hidden'}
			minH={'full'}
			isLazy
		>
			<IdeaTab />
			<Box>Comments</Box>
			<Box>Workboard</Box>
			<Box>Metrics</Box>
		</TabLayout>
	);
};

export default ViewIdeaTabLayout;
