import { useBreakpointValue } from '@chakra-ui/react';
import TabLayout from 'components/layouts/TabLayout';
import React from 'react';
import UserActivityTab from '../components/UserActivityTab';
import UserPersonalDetails from '../components/UserPersonalDetails';
import WorkExperienceTab from '../components/WorkExperienceTab';

const UserProfileTabLayout = (): JSX.Element => (
	<React.Fragment>
		{useBreakpointValue({ base: true, md: false }) ? (
			<TabLayout
				tabs={[
					{ label: 'About' },
					{ label: 'Experience' },
					{ label: 'Activity' }
				]}
			>
				<UserPersonalDetails />
				<WorkExperienceTab />
				<UserActivityTab />
			</TabLayout>
		) : (
			<TabLayout tabs={[{ label: 'Experience' }, { label: 'Activity' }]}>
				<WorkExperienceTab />
				<UserActivityTab />
			</TabLayout>
		)}
	</React.Fragment>
);

export default UserProfileTabLayout;
