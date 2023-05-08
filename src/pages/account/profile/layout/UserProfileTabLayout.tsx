import { useBreakpointValue } from '@chakra-ui/react';
import TabLayout from '@/components/layouts/TabLayout';
import React from 'react';
import UserActivityTab from '../components/UserActivityTab';
import UserPersonalDetails from '../components/UserPersonalDetails';
import WorkExperienceTab from '../components/WorkExperienceTab';
import MatchmakeSettingsTab from '../components/MatchmakeSettingsTab';

const UserProfileTabLayout = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<React.Fragment>
			{isMobile ? (
				<TabLayout
					tabs={[
						{ label: 'About' },
						{ label: 'Details' },
						{ label: 'Match' },
						{ label: 'Activity' }
					]}
				>
					<UserPersonalDetails />
					<WorkExperienceTab />
					<MatchmakeSettingsTab />
					<UserActivityTab />
				</TabLayout>
			) : (
				<TabLayout
					tabs={[
						{ label: 'Details' },
						{ label: 'Match' },
						{ label: 'Activity' }
					]}
				>
					<WorkExperienceTab />
					<MatchmakeSettingsTab />
					<UserActivityTab />
				</TabLayout>
			)}
		</React.Fragment>
	);
};

export default UserProfileTabLayout;
