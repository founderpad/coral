import { PageLayout } from '@components/layouts';
import { DocumentTitle, LastUpdatedAt } from '@components/shared';
import { useUserExperienceQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import AuthFilter from '@utils/AuthFilter';
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
		<React.Fragment>
			<DocumentTitle title="Profile" />
			<PageLayout
				title="Your profile"
				action={updatedAt && <LastUpdatedAt date={updatedAt} />}
				p={{ base: 0, md: 4 }}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor={'fpLightGrey.900'}
			>
				<ProfileLayout />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Profile);
