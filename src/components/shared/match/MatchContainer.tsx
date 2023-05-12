import { useMatchesQuery } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useAuth } from '@/hooks/auth';
// import { Tag } from '@chakra-ui/react';
import { NoResults } from '../NoResults';
import React from 'react';
import LinkCard from '@/components/cards/LinkCard';
import { UserAvatarDetails } from '../UserAvatar';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { Tag } from '@chakra-ui/react';

export const MatchContainer = () => {
	const authUser = useCurrentUser();

	// authUser.profile?.skills.reduce(function(obj: any, v: any) {
	// 	obj[v] = 0;
	// 	return obj;
	//   }, {})

	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: useAuth().getUser()?.id,
			lookingFor: authUser.matchSettings?.type ?? '',
			skills: authUser.profile?.skills ?? []
		}
	});

	const hasResults = data?.users.length ?? 0;

	return (
		<React.Fragment>
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<StackLayout>
					{data?.users?.map((user) => (
						<React.Fragment key={user?.id}>
							<LinkCard
								href={`/user/${user?.id}`}
								footer={
									<StackLayout direction="row" spacing="2">
										{user.profile?.skills.map(
											(skill: any) => {
												if (
													authUser.profile?.skills.includes(
														skill
													)
												) {
													return (
														<Tag
															size="sm"
															key={skill}
															bgColor={
																authUser.profile?.skills.includes(
																	skill
																)
																	? 'fpPrimary.500'
																	: 'inherit'
															}
															color={
																authUser.profile?.skills.includes(
																	skill
																)
																	? 'white'
																	: 'initial'
															}
														>
															{skill}
														</Tag>
													);
												} else {
													return (
														<Tag
															size="sm"
															key={skill}
															variant="subtle"
														>
															{skill}
														</Tag>
													);
												}
											}
										)}
									</StackLayout>
								}
							>
								<UserAvatarDetails
									src={user.avatarUrl ?? undefined}
									title={user?.displayName}
									subtitle={
										<FlexLayout
											alignItems="center"
											flexDirection="column"
										>
											<Tag>
												{user.matchSettings?.type}
											</Tag>
										</FlexLayout>
									}
									size="md"
								/>
							</LinkCard>
						</React.Fragment>
					))}
				</StackLayout>
			)}
		</React.Fragment>
	);
};

export default MatchContainer;
