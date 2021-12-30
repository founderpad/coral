import { PageLayout } from 'components/layouts';
import { DocumentTitle, LastUpdatedAt } from 'components/shared';
import { useUserExperienceQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import ProfileLayout from './layout/ProfileLayout';

const Profile = (): JSX.Element => {
	const user = useCurrentUser();

	const { data } = useUserExperienceQuery({
		variables: {
			id: user?.user_profile.id
		}
	});

	const updatedAt = data?.profile.updated_at;

	return (
		<React.Fragment>
			<DocumentTitle title="Profile" />
			<PageLayout
				title="Your profile"
				action={updatedAt && <LastUpdatedAt date={updatedAt} />}
				p={{ base: 0, md: 4 }}
			>
				<ProfileLayout />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Profile);
