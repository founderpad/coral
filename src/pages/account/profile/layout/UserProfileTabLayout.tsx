import { useBreakpointValue } from '@chakra-ui/react';
import TabLayout from '@components/layouts/TabLayout';
import React from 'react';
import UserActivityTab from '../components/UserActivityTab';
import UserPersonalDetails from '../components/UserPersonalDetails';
import WorkExperienceTab from '../components/WorkExperienceTab';

const UserProfileTabLayout = () => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<React.Fragment>
			{isMobile ? (
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
				<TabLayout
					tabs={[{ label: 'Experience' }, { label: 'Activity' }]}
				>
					<WorkExperienceTab />
					<UserActivityTab />
				</TabLayout>
			)}
		</React.Fragment>
	);
};

export default UserProfileTabLayout;
