import { TUsers, useMatchesQuery } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useAuth } from '@/hooks/auth';
import React from 'react';
import LinkCard from '@/components/cards/LinkCard';
import { FlexLayout } from '@/components/layouts';
import { SimpleGrid, Tag } from '@chakra-ui/react';
import { NoResults, UserAvatarDetails } from '@/components/shared';
import MatchedSkills from '@/components/shared/match/MatchedSkills';
import UserMatchPreferences from '@/components/shared/match/UserMatchPreferences';

export const sortByCommonSkills = (
	foundUsers: TUsers[],
	matchSkills: string[]
): TUsers[] => {
	const res = [...foundUsers]
		.sort((a: TUsers, b: TUsers): number => {
			const aSkills = (a.profile?.skills as string[]) || [];
			const bSkills = (b.profile?.skills as string[]) || [];

			// Calculate the number of common skills
			const aCommonSkills = aSkills.filter((skill) =>
				matchSkills.includes(skill)
			);
			const bCommonSkills = bSkills.filter((skill) =>
				matchSkills.includes(skill)
			);

			// Sort by the greatest number of common skills
			if (bCommonSkills.length !== aCommonSkills.length) {
				return bCommonSkills.length - aCommonSkills.length;
			}

			// If the number of common skills is the same, sort alphabetically
			const sortedCommonSkillsA = [...aCommonSkills].sort();
			const sortedCommonSkillsB = [...bCommonSkills].sort();
			const commonSkillsComparison = sortedCommonSkillsA
				.join('')
				.localeCompare(sortedCommonSkillsB.join(''));

			// If the common skills are different, return the comparison result
			if (commonSkillsComparison !== 0) {
				return commonSkillsComparison;
			}

			// If the common skills are the same, sort based on all skills
			return aSkills.join('').localeCompare(bSkills.join(''));
		})
		.map((user) => ({ ...user }));

	return res;
};

export const MatchContainer = () => {
	const authUser = useCurrentUser();

	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: useAuth().getUser()?.id,
			userLookingFor: authUser.matchSettings?.lookingFor ?? '',
			userProfileSkills: authUser.matchSettings?.skills ?? []
		}
	});

	const hasResults = data?.users.length ?? 0;

	const users = sortByCommonSkills(
		(data?.users as TUsers[]) ?? [],
		authUser.matchSettings?.skills
	);

	return (
		<>
			<UserMatchPreferences />
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
					{users?.map((user) => (
						<React.Fragment key={user?.id}>
							<LinkCard
								href={`/user/${user?.id}`}
								cardProps={{ borderWidth: 1 }}
							>
								<UserAvatarDetails
									src={user.avatarUrl ?? undefined}
									title={user?.displayName}
									subtitle={
										<FlexLayout
											alignItems="center"
											flexDirection="column"
										>
											<Tag size="sm">
												{user.matchSettings?.type}
											</Tag>
										</FlexLayout>
									}
									size="md"
								/>
								<MatchedSkills skills={user.profile?.skills} />
							</LinkCard>
						</React.Fragment>
					))}
				</SimpleGrid>
			)}
		</>
	);
};

export default MatchContainer;
