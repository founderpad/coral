import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import React from 'react';
import ProfileLayout from './layout/ProfileLayout';

const Profile = () => {
	return (
		<>
			<PageHtmlHead
				title="Profile"
				pageSlug="/account/profile"
				description="View your profile."
			/>
			<PageLayout title="Your profile" p={{ base: 0, md: 4 }}>
				<ProfileLayout />
			</PageLayout>
		</>
	);
};

export default AuthFilter(Profile);
