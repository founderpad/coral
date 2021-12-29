import { StackLayout } from 'components/layouts';
import { Loading, UserAvatarDetails } from 'components/shared';
import { useGetIdeaInterestedUsersQuery } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

const InterestedUsersTab = ({ ideaId }: { ideaId: string }) => {
	const { data } = useGetIdeaInterestedUsersQuery({
		variables: {
			ideaId
		}
	});

	if (!data) return <Loading small />;

	return (
		<StackLayout p={4}>
			{data?.interested_users.map((interestedUser) => (
				<UserAvatarDetails
					src={interestedUser.user.avatar_url}
					name={interestedUser.user.display_name}
					createdAt={formatDate(interestedUser.created_at, true)}
				/>
			))}
		</StackLayout>
	);
};

export default InterestedUsersTab;
