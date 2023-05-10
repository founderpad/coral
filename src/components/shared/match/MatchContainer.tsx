import { useMatchesQuery } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useAuth } from '@/hooks/auth';
// import { Tag } from '@chakra-ui/react';
import { NoResults } from '../NoResults';
import React from 'react';
import LinkCard from '@/components/cards/LinkCard';
import { UserAvatarDetails } from '../UserAvatar';
import { FlexLayout, StackLayout } from '@/components/layouts';

export const MatchContainer = () => {
	const authUser = useCurrentUser();

	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: useAuth().getUser()?.id,
			lookingFor: authUser.matchSettings?.type ?? '',
			skills: authUser.profile?.skills ?? []
		}
	});

	const hasResults = data?.users.length ?? 0;

	// console.log('user profile skills: ', authUser.profile?.skills);
	// console.log('matched skills: ', data);

	return (
		<React.Fragment>
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<StackLayout>
					{data?.users?.map((user) => (
						<React.Fragment key={user?.id}>
							<LinkCard href={`/user/${user?.id}`}>
								<UserAvatarDetails
									src={user.avatarUrl ?? undefined}
									title={user?.displayName}
									subtitle={
										<FlexLayout
											alignItems="center"
											flexDirection="column"
										></FlexLayout>
									}
									size="md"
								/>
								{/* <FlexLayout pt={4}>
									{user.profile?.skills.map(
										(skill: string) => (
											<Tag
												fontSize="xs"
												size="sm"
												mr={1}
												mb={1}
												key={skill}
												colorScheme={
													user.profile?.skills.includes(
														skill
													)
														? 'fpPrimary'
														: 'green'
												}
											>
												{skill}
											</Tag>
										)
									)}
								</FlexLayout> */}
							</LinkCard>
						</React.Fragment>
					))}
				</StackLayout>
			)}
		</React.Fragment>
	);
};

export default MatchContainer;
