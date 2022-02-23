import { FlexLayout, StackLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { Loading, NoResults, UserAvatarDetails } from '@components/shared';
import { useIdeaInterestedUsersLazyQuery } from '@generated/api';
import { formatDate } from '@utils/validators';
import React, { useEffect } from 'react';
import useIdea from '../query/ideaQuery';

export const InterestedUsersTab = () => {
	// const idea = useContext(IdeaContext)?.data?.idea;

	// const totalInterested = useIdea().idea?.interested_aggregate.aggregate?.count ?? 0;
	const idea = useIdea()?.idea;
	const totalInterested =
		useIdea()?.idea?.interested_aggregate.aggregate?.count ?? 0;

	const [getInterestedUsers, { data }] = useIdeaInterestedUsersLazyQuery({
		variables: {
			ideaId: idea?.id
		}
	});

	useEffect(() => {
		if (totalInterested > 0) {
			getInterestedUsers();
		}
	}, [totalInterested, getInterestedUsers]);

	if (totalInterested < 1) return <NoResults label="interested users" />;
	if (!data) return <Loading small />;

	return (
		<StackLayout p={4}>
			{data?.interested_users?.map((interestedUser) => (
				<FlexLayout
					key={interestedUser?.user?.id}
					alignItems="center"
					justifyContent="space-between"
				>
					<UserAvatarDetails
						src={interestedUser?.user?.avatarUrl || undefined}
						title={interestedUser?.user?.displayName}
						createdAt={formatDate(interestedUser.createdAt, true)}
					/>
					<PrimaryLink
						title="View profile"
						href={`/user/${interestedUser?.user?.id}`}
						fontSize="xs"
						ml={4}
					>
						View profile
					</PrimaryLink>
				</FlexLayout>
			))}
		</StackLayout>
	);
};

export default InterestedUsersTab;
