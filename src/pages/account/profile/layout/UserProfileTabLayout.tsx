import { useBreakpointValue } from '@chakra-ui/react';
import TabLayout from 'components/layouts/TabLayout';
import React from 'react';
import AboutTab from '../components/AboutTab';
import UserActivityTab from '../components/UserActivityTab';
import WorkExperienceTab from '../components/WorkExperienceTab';

const UserProfileTabLayout = (): JSX.Element => {
	const showAboutTab = useBreakpointValue({ base: true, md: false });

	if (showAboutTab)
		return (
			<TabLayout
				tabs={[
					{ label: 'About' },
					{ label: 'Experience' },
					{ label: 'Activity' }
				]}
				px={2}
			>
				<AboutTab />
				<WorkExperienceTab />
				<UserActivityTab />
			</TabLayout>
		);
	else
		return (
			<TabLayout tabs={[{ label: 'Experience' }, { label: 'Activity' }]}>
				<WorkExperienceTab />
				<UserActivityTab />
			</TabLayout>
		);
};

export default UserProfileTabLayout;
