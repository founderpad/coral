import { FlexLayout, StackLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { Loading, NoResults, UserAvatarDetails } from '@components/shared';
import IdeaContext from '@context/idea/IdeaContext';
import { useIdeaInterestedUsersLazyQuery } from '@generated/api';
import { formatDate } from '@utils/validators';
import React, { useContext, useEffect } from 'react';

export const InterestedUsersTab = () => {
	const idea = useContext(IdeaContext)?.data?.idea;

	const [getInterestedUsers, { data }] = useIdeaInterestedUsersLazyQuery({
		variables: {
			ideaId: idea?.id
		}
	});

	const totalInterested = idea?.totalInterested ?? 0;

	useEffect(() => {
		if (totalInterested > 0) getInterestedUsers();
	}, []);

	if (totalInterested < 1) return <NoResults label={'interested users'} />;
	if (!data) return <Loading small />;

	return (
		<StackLayout p={4}>
			{data?.interested_users.map((interestedUser) => (
				<FlexLayout
					key={interestedUser?.user?.id}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<UserAvatarDetails
						src={interestedUser?.user?.avatarUrl || undefined}
						name={interestedUser?.user?.displayName}
						createdAt={formatDate(interestedUser.createdAt, true)}
					/>
					<PrimaryLink
						title={'View profile'}
						href={`/user/${interestedUser?.user?.id}`}
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
