import { FlexLayout, StackLayout } from '@/components/layouts';
import { PrimaryLink } from '@/components/links';
import {
	AppDivider,
	AvatarWithDetails,
	Loading,
	NoResults
} from '@/components/shared';
import { useIdeaInterestedUsersLazyQuery } from '@/generated/api';
import NewMessageModal from '@/pages/users/user/components/NewMessageModal';
import React, { useEffect } from 'react';
import useCachedIdea from '../query/ideaQuery';

export const InterestedUsersTab = () => {
	const { idea } = useCachedIdea() ?? {};
	const totalInterested = idea?.interested_aggregate.aggregate?.count ?? 0;

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
			{data?.interested_users?.map((interestedUser) => {
				const userId = interestedUser?.user?.id;
				const displayName = interestedUser?.user?.displayName;
				const avatarUrl = interestedUser?.user?.avatarUrl;

				return (
					<FlexLayout
						key={userId}
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexLayout alignItems="center" h="full">
							<AvatarWithDetails
								title={displayName}
								src={avatarUrl}
								small
								row
							/>
							<AppDivider
								orientation="vertical"
								mx={3}
								h="30px"
							/>
							<NewMessageModal userId={userId} icon />
						</FlexLayout>
						<PrimaryLink
							title="View profile"
							href={`/user/${userId}`}
							fontSize="xs"
							ml={4}
						>
							View profile
						</PrimaryLink>
					</FlexLayout>
				);
			})}
		</StackLayout>
	);
};

export default InterestedUsersTab;
