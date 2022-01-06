import { FlexLayout, StackLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
import { Loading, UserAvatarDetails } from 'components/shared';
import { useIdeaInterestedUsersQuery } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

const InterestedUsersTab = ({ ideaId }: { ideaId: string }) => {
	const { data } = useIdeaInterestedUsersQuery({
		variables: {
			ideaId
		}
	});

	if (!data) return <Loading small />;

	return (
		<StackLayout p={4}>
			{data?.interested_users.map((interestedUser) => (
				<FlexLayout
					key={interestedUser.user.id}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<UserAvatarDetails
						src={interestedUser.user.avatar_url}
						name={interestedUser.user.display_name}
						createdAt={formatDate(interestedUser.created_at, true)}
					/>
					<PrimaryLink
						title={'View profile'}
						href={`/user/${interestedUser.user.id}`}
						fontSize={'xs'}
					>
						View profile
					</PrimaryLink>
				</FlexLayout>
			))}
		</StackLayout>
	);
};

export default InterestedUsersTab;
