import { PageLayout } from '@/components/layouts';
import { LastUpdatedAt, PageHtmlHead } from '@/components/shared';
import { useUserExperienceQuery } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import ProfileLayout from './layout/ProfileLayout';

const Profile: NextPage = () => {
	const user = useCurrentUser();

	const { data } = useUserExperienceQuery({
		variables: {
			id: user?.profile?.id
		}
	});

	const updatedAt = data?.profile?.updatedAt;

	return (
		<>
			<PageHtmlHead
				title="Profile"
				pageSlug="/account/profile"
				description="View your profile."
			/>
			<PageLayout
				title="Your profile"
				action={updatedAt && <LastUpdatedAt date={updatedAt} />}
				p={{ base: 0, md: 4 }}
			>
				<ProfileLayout />
			</PageLayout>
		</>
	);
};

export default AuthFilter(Profile);
